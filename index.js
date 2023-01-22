import { fabric } from 'fabric';

const mainCanvas = document.querySelector('.canvas');
const o1 = document.querySelector('.obj1');
const o2 = document.querySelector('.obj2');
const o3 = document.querySelector('.obj3');
const scene = new fabric.Canvas(mainCanvas, {
  width: 600,
  height: 600,
});

const rect1 = new fabric.Rect({
  top: 100,
  left: 100,
  width: 60,
  height: 70,
  fill: 'red',
});

const rect2 = new fabric.Rect({
  top: 200,
  left: 100,
  width: 60,
  height: 70,
  fill: 'green',
});

const rect3 = new fabric.Rect({
  top: 100,
  left: 200,
  width: 60,
  height: 70,
  fill: 'blue',
});

scene.add(rect1);
scene.add(rect2);
// scene.add(rect3);

scene.on('object:scaling', (e) => {
  const selectedObjs = scene.getActiveObject();
  selectedObjs._objects.forEach((o) => {
    console.log(selectedObjs.scaleX, selectedObjs._objects[0].width);
    o.set({
      width: o.width * selectedObjs.scaleX,
    });
    o.setCoords();
    // selectedObjs.scaleX = 1;
    o.scaleX = o.scaleY = 1;
    scene.getActiveObject().scaleX = 1;
    // console.log(o.width, o.scaleX);
    // scene.renderAll();
  });
});
