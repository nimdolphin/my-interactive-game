export const calculateNewRect = (e, fieldRect) => {
  const rectWidth = (fieldRect.width * 15) / 100;
  const rectHeight = (fieldRect.height * 10) / 100;

  return {
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
};
