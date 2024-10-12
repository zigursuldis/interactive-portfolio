import { RefObject, useEffect, useState } from "react";
import useElementCoordinates from "./useElementCoordinates";

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

    const handleMouseMove = (event: MouseEvent) => {
      if (isDraggingFromRef) {
        if (event.clientX < refCoordinates.x) {
          setXOffset(0);
        } else if (event.clientX + 2 > refCoordinates.x2) {
          setXOffset(refCoordinates.x2 - refCoordinates.x - 2);
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
      const timelineContainer = ref.current; //persistant reference

      timelineContainer.addEventListener("mousedown", handleMouseDown);
      timelineContainer.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        timelineContainer.removeEventListener("mousedown", handleMouseDown);
        timelineContainer.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [ref, refCoordinates, isDraggingFromRef]);
  useEffect(() => {}, []);

  return { xOffset, isDraggingFromRef, refCoordinates };
}
