import { RefObject, useCallback, useEffect, useState } from "react";
import useElementCoordinates from "./useElementCoordinates";

//could refactor this into two separate hooks, as it's super bloaty

export default function usePinDrag(ref: RefObject<HTMLDivElement | null>) {
  const [xOffset, setXOffset] = useState(0);
  const [isDraggingFromRef, setIsDraggingFromRef] = useState(false);
  const elementCoordinates = useElementCoordinates(ref);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (
        event.pageX >= elementCoordinates.x &&
        event.pageX <= elementCoordinates.x2 &&
        event.pageY >= elementCoordinates.y &&
        event.pageY <= elementCoordinates.y2
      ) {
        setXOffset(event.pageX - elementCoordinates.x);
        setIsDraggingFromRef(true);
      }
    },
    [elementCoordinates]
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDraggingFromRef) {
        if (event.pageX < elementCoordinates.x) {
          setXOffset(0);
        } else if (event.pageX + 2 > elementCoordinates.x2) {
          setXOffset(elementCoordinates.x2 - elementCoordinates.x - 2); //-2px so pin doesn't go outside container (2px pin width)
        } else {
          setXOffset(event.pageX - elementCoordinates.x);
        }
      }
    },
    [isDraggingFromRef, elementCoordinates]
  );

  const handleMouseUp = useCallback(() => {
    setIsDraggingFromRef(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDraggingFromRef(false);
  }, []);

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      const touch = event?.changedTouches?.[0];
      if (isDraggingFromRef && touch) {
        if (touch.pageX < elementCoordinates.x) {
          setXOffset(0);
        } else if (touch.pageX + 2 > elementCoordinates.x2) {
          setXOffset(elementCoordinates.x2 - elementCoordinates.x - 2);
        } else {
          setXOffset(touch.pageX - elementCoordinates.x);
        }
      }
    },
    [isDraggingFromRef, elementCoordinates]
  );

  const handleTouchStart = useCallback(
    (event: TouchEvent) => {
      const touch = event?.changedTouches?.[0];
      if (
        touch.pageX >= elementCoordinates.x &&
        touch.pageX <= elementCoordinates.x2 &&
        touch.pageY >= elementCoordinates.y &&
        touch.pageY <= elementCoordinates.y2
      ) {
        setXOffset(touch.pageX - elementCoordinates.x);
        setIsDraggingFromRef(true);
      }
    },
    [elementCoordinates]
  );

  useEffect(() => {
    if (ref.current && window) {
      const timelineContainer = ref.current;

      timelineContainer.addEventListener("mousedown", handleMouseDown);
      timelineContainer.addEventListener("touchstart", handleTouchStart);
      //attaching to window to have better UX when dragging out of the timeline component (doesnt need to reclick/redrag)
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        timelineContainer.removeEventListener("mousedown", handleMouseDown);
        timelineContainer.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchend", handleTouchEnd);
      };
    }
  }, [
    ref,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  ]);

  return { xOffset, isDraggingFromRef, refCoordinates: elementCoordinates, setXOffset };
}
