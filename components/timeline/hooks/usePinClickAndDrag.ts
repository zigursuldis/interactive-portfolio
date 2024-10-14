import { RefObject, useEffect, useState } from "react";
import useElementCoordinates from "./useElementCoordinates";
//could refactor this into two separate hooks, as it's super bloaty
export default function usePinDrag(ref: RefObject<HTMLDivElement>) {
  const [xOffset, setXOffset] = useState(0);
  const [isDraggingFromRef, setIsDraggingFromRef] = useState(false);
  const refCoordinates = useElementCoordinates(ref);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (
        event.clientX >= refCoordinates.x &&
        event.clientX <= refCoordinates.x2 &&
        event.clientY >= refCoordinates.y &&
        event.clientY <= refCoordinates.y2
      ) {
        setXOffset(event.clientX - refCoordinates.x);
        setIsDraggingFromRef(true);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingFromRef(false);
    };

    const handleTouchEnd = () => {
      setIsDraggingFromRef(false);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isDraggingFromRef) {
        if (event.clientX < refCoordinates.x) {
          setXOffset(0);
        } else if (event.clientX + 2 > refCoordinates.x2) {
          setXOffset(refCoordinates.x2 - refCoordinates.x - 2); //-2px so pin doesn't go outside container (2px pin width)
        } else {
          setXOffset(event.clientX - refCoordinates.x);
        }
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event?.changedTouches?.[0];
      if (isDraggingFromRef && touch) {
        if (touch.clientX < refCoordinates.x) {
          setXOffset(0);
        } else if (touch.clientX + 2 > refCoordinates.x2) {
          setXOffset(refCoordinates.x2 - refCoordinates.x - 2);
        } else {
          setXOffset(touch.clientX - refCoordinates.x);
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event?.changedTouches?.[0];
      if (
        touch.clientX >= refCoordinates.x &&
        touch.clientX <= refCoordinates.x2 &&
        touch.clientY >= refCoordinates.y &&
        touch.clientY <= refCoordinates.y2
      ) {
        setXOffset(touch.clientX - refCoordinates.x);
        setIsDraggingFromRef(true);
      }
    };

    if (ref.current && window) {
      const timelineContainer = ref.current;

      timelineContainer.addEventListener("mousedown", handleMouseDown);
      timelineContainer.addEventListener("touchstart", handleTouchStart);
      //attaching to window to have better UX when dragging out of the timeline component (doesnt need to reclick/redrag)
      //given event handlers are created each useEffect
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
  }, [ref, refCoordinates, isDraggingFromRef]);
  useEffect(() => {}, []);

  return { xOffset, isDraggingFromRef, refCoordinates };
}
