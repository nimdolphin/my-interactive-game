"use client";

import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import styles from "../../app/styles/GameField.module.scss";

const GameField = () => {
  const [rectangles, setRectangles] = useState([]);
  const nodeRefs = useRef([]);
  const isDragging = useRef(false);
  const fieldRef = useRef(null);

  const handleFieldPointerDown = (e) => {
    if (e.target.className.includes("rectangle")) {
      isDragging.current = true;
    } else {
      isDragging.current = false;
    }
  };

  const handleFieldClick = (e) => {
    if (isDragging.current) {
      isDragging.current = false;
      return;
    }

    if (e.target.className.includes("rectangle")) {
      return;
    }

    const fieldRect = e.currentTarget.getBoundingClientRect();
    const rectWidth = (fieldRect.width * 15) / 100;
    const rectHeight = (fieldRect.height * 10) / 100;
    const newRect = {
      id: Date.now(),
      x: e.clientX - fieldRect.left - rectWidth / 2,
      y: e.clientY - fieldRect.top - rectHeight / 2,
      xPercent:
        ((e.clientX - fieldRect.left - rectWidth / 2) / fieldRect.width) * 100,
      yPercent:
        ((e.clientY - fieldRect.top - rectHeight / 2) / fieldRect.height) * 100,
      widthPercent: 15,
      heightPercent: 10,
      img: "/placeholder.webp",
      isNew: true,
    };

    setRectangles((prev) => {
      const updated = [...prev, newRect];
      nodeRefs.current.push(React.createRef());
      return updated;
    });
  };

  const handleStart = (index) => {
    isDragging.current = true;

    setRectangles((prev) => {
      const updated = [...prev];
      const [movedRect] = updated.splice(index, 1);
      updated.push(movedRect);
      return updated;
    });
  };

  const handleDrag = (index, e, data) => {
    const fieldRect = e.target.closest(`.${styles.gameField}`);
    if (!fieldRect) return;

    const rect = fieldRect.getBoundingClientRect();
    setRectangles((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        x: data.x,
        y: data.y,
        xPercent: (data.x / rect.width) * 100,
        yPercent: (data.y / rect.height) * 100,
      };
      return updated;
    });
  };

  const handleStop = () => {
    setTimeout(() => {
      isDragging.current = false;
    }, 0);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleResize = () => {
      if (fieldRef.current) {
        const fieldRect = fieldRef.current.getBoundingClientRect();
        setRectangles((prev) =>
          prev.map((rect) => ({
            ...rect,
            x: (rect.xPercent / 100) * fieldRect.width,
            y: (rect.yPercent / 100) * fieldRect.height,
          }))
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={styles.gameField}
      onClick={handleFieldClick}
      onPointerDown={handleFieldPointerDown}
      ref={fieldRef}
    >
      {rectangles.map((rect, index) => (
        <Draggable
          key={rect.id}
          position={{ x: rect.x, y: rect.y }}
          bounds="parent"
          nodeRef={nodeRefs.current[index]}
          onStart={(e, data) => handleStart(index, e, data)}
          onDrag={(e, data) => handleDrag(index, e, data)}
          onStop={handleStop}
        >
          <div
            ref={nodeRefs.current[index]}
            className={`${styles.rectangle} rectangle ${
              rect.isNew ? styles.newRectangle : ""
            }`}
            onPointerDown={(e) => e.stopPropagation()}
            onDragStart={handleDragStart}
            style={{
              zIndex: index,
              width: `${rect.widthPercent}%`,
              paddingBottom: `${rect.heightPercent}%`,
              left: "0",
              top: "0",
              "--finalX": `${rect.x}px`,
              "--finalY": `${rect.y}px`,
            }}
            onAnimationEnd={() => {
              setRectangles((prev) =>
                prev.map((r, i) => (i === index ? { ...r, isNew: false } : r))
              );
            }}
          >
            <Image src={rect.img} alt="rectangle" fill unoptimized />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default GameField;
