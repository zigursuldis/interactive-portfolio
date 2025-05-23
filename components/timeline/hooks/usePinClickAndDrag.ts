import { RefObject, useCallback, useEffect, useState } from "react";
import useElementCoordinates from "./useElementCoordinates";

//could refactor this into two separate hooks, as it's super bloaty

export default function usePinDrag(ref: RefObject<HTMLDivElement | null>) {
  const [xOffset, setXOffset] = useState(0);
  const [isDraggingFromRef, setIsDraggingFromRef] = useState(false);
  const refCoordinates = useElementCoordinates(ref);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (
        event.pageX >= refCoordinates.x &&
        event.pageX <= refCoordinates.x2 &&
        event.pageY >= refCoordinates.y &&
        event.pageY <= refCoordinates.y2
      ) {
        setXOffset(event.pageX - refCoordinates.x);
        setIsDraggingFromRef(true);
      }
    },
    [refCoordinates]
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDraggingFromRef) {
        if (event.pageX < refCoordinates.x) {
          setXOffset(0);
        } else if (event.pageX + 2 > refCoordinates.x2) {
          setXOffset(refCoordinates.x2 - refCoordinates.x - 2); //-2px so pin doesn't go outside container (2px pin width)
        } else {
          setXOffset(event.pageX - refCoordinates.x);
        }
      }
    },
    [isDraggingFromRef, refCoordinates]
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
        if (touch.pageX < refCoordinates.x) {
          setXOffset(0);
        } else if (touch.pageX + 2 > refCoordinates.x2) {
          setXOffset(refCoordinates.x2 - refCoordinates.x - 2);
        } else {
          setXOffset(touch.pageX - refCoordinates.x);
        }
      }
    },
    [isDraggingFromRef, refCoordinates]
  );

  const handleTouchStart = useCallback(
    (event: TouchEvent) => {
      const touch = event?.changedTouches?.[0];
      if (
        touch.pageX >= refCoordinates.x &&
        touch.pageX <= refCoordinates.x2 &&
        touch.pageY >= refCoordinates.y &&
        touch.pageY <= refCoordinates.y2
      ) {
        setXOffset(touch.pageX - refCoordinates.x);
        setIsDraggingFromRef(true);
      }
    },
    [refCoordinates]
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

  return { xOffset, isDraggingFromRef, refCoordinates, setXOffset };
}
