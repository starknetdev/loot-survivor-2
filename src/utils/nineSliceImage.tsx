type SubRectangle = {
  xStart: any;
  yStart: any;
  width: any;
  height: any;
};

interface DrawNineSliceImageProps {
  ctx: any;
  img: any;
  leftWidth: any;
  rightWidth: any;
  topHeight: any;
  bottomHeight: any;
  x: any;
  y: any;
  width: any;
  height: any;
}

export const drawNineSliceImage = ({
  ctx,
  img,
  leftWidth,
  rightWidth,
  topHeight,
  bottomHeight,
  x,
  y,
  width,
  height,
}: DrawNineSliceImageProps) => {
  const totalWidthCut = leftWidth + rightWidth;
  const totalHeightCut = topHeight + bottomHeight;
  // break the main image up into 9 parts, based on the size of the slice.
  // each piece should be [x, y, width, height]

  // start in the top left corner for our first cut
  const topLeft: SubRectangle = {
    xStart: 0,
    yStart: 0,
    width: leftWidth,
    height: topHeight,
  };
  // for the middle, we need to calculate the width remaining after we take our two cuts
  const topMiddle: SubRectangle = {
    xStart: leftWidth,
    yStart: 0,
    width: img.width - totalWidthCut,
    height: topHeight,
  };
  // for the top right side corner we just need to take the total width and remove the cut length
  const topRight: SubRectangle = {
    xStart: img.width - rightWidth,
    yStart: 0,
    width: rightWidth,
    height: topHeight,
  };
  // for the middle left, we take the overall image height and subtract the size of the two corner cuts to get new height
  const middleRowHeight = img.height - totalHeightCut;
  /** @type {SubRectangle} */
  const middleLeft: SubRectangle = {
    xStart: 0,
    yStart: topHeight,
    width: leftWidth,
    height: middleRowHeight,
  };
  // for the middle, we need to take the overall image height and width, subtract the two corner cuts to get the new dimensions
  const center: SubRectangle = {
    xStart: leftWidth,
    yStart: topHeight,
    width: img.width - totalWidthCut,
    height: middleRowHeight,
  };
  // for the middle right, we need to do similar logic that was done for the middle left piece
  const middleRight: SubRectangle = {
    xStart: img.width - rightWidth,
    yStart: topHeight,
    width: rightWidth,
    height: middleRowHeight,
  };

  // for the bottom left, we take the overall image height and subtract the corner cut
  const bottomRowY = img.height - bottomHeight;
  const bottomLeft: SubRectangle = {
    xStart: 0,
    yStart: bottomRowY,
    width: leftWidth,
    height: bottomHeight,
  };
  // for the bottom middle, we do the same logic we did in the top middle frame, just at a lower y value
  const bottomMiddle: SubRectangle = {
    xStart: leftWidth,
    yStart: bottomRowY,
    width: img.width - totalWidthCut,
    height: bottomHeight,
  };
  // for the bottom right, we do the same logic we did in the top right frame, just at a lower y value
  const bottomRight: SubRectangle = {
    xStart: img.width - rightWidth,
    yStart: bottomRowY,
    width: rightWidth,
    height: bottomHeight,
  };

  // now that we have our nine sub rectangles that make up the original source image, we can draw those onto the canvas element
  // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) Note: the sx, sy, sWidth, and sHeight where already calculated above

  // draw the top row
  ctx.drawImage(img, ...Object.values(topLeft), x, y, leftWidth, topHeight);
  ctx.drawImage(
    img,
    ...Object.values(topMiddle),
    x + leftWidth,
    y,
    width - totalWidthCut,
    topHeight
  );
  ctx.drawImage(
    img,
    ...Object.values(topRight),
    x + width - rightWidth,
    y,
    rightWidth,
    topHeight
  );
  // draw the middle row
  ctx.drawImage(
    img,
    ...Object.values(middleLeft),
    x,
    y + topHeight,
    leftWidth,
    height - totalHeightCut
  );
  ctx.drawImage(
    img,
    ...Object.values(center),
    x + leftWidth,
    y + topHeight,
    width - totalWidthCut,
    height - totalHeightCut
  );
  ctx.drawImage(
    img,
    ...Object.values(middleRight),
    x + width - rightWidth,
    y + topHeight,
    rightWidth,
    height - totalHeightCut
  );
  // draw the bottom row
  ctx.drawImage(
    img,
    ...Object.values(bottomLeft),
    x,
    y + height - bottomHeight,
    leftWidth,
    bottomHeight
  );
  ctx.drawImage(
    img,
    ...Object.values(bottomMiddle),
    x + leftWidth,
    y + height - bottomHeight,
    width - totalWidthCut,
    bottomHeight
  );
  ctx.drawImage(
    img,
    ...Object.values(bottomRight),
    x + width - rightWidth,
    y + height - bottomHeight,
    rightWidth,
    bottomHeight
  );
};
