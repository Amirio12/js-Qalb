
let isSpinning = true
let sceneSize = 200
let displaySize

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  zoom:2,
  resize: 'fullscreen',
  onResize: function( width, height ) {
    displaySize = Math.min( width, height );
    this.zoom = Math.floor( displaySize / sceneSize );
  },
  onDragStart: function() {
    isSpinning = false;
  },
});

let anchor = new Zdog.Anchor({
  addTo: illo,
});

// circle
new Zdog.Ellipse({
  addTo: anchor,
  diameter: 50,
  translate: { z: 20 },
  stroke: 10,
  color: '#fff',
});


let box = new Zdog.Box({
  addTo: anchor,
  width: 5,
  height: 5,
  depth: 30,
  stroke: true,
  translate: { z: -20},
  color: 'rgba(237,72,77,.8)',
  leftFace: '#EA0',
  rightFace: '#E62',
  topFace: 'rgb(41,252,155,.8)',
  bottomFace: '#fff',
});


new Zdog.Shape({
  addTo: anchor,
  color: '#fff',
  stroke: 10,
});


new Zdog.Shape({
  addTo: anchor,
  color: '#fff',
  stroke: 3,
});



var objs = [];

  console.log(illo.width)

for (i = 0; i < 50; i++) { 
  
  let posX = getRandomInt(illo.width)-illo.width/2
  let posY = getRandomInt(illo.height)-illo.height/2
  let posZ = getRandomInt(illo.width)-illo.width/2
  let randRot = Math.random()*(0.01)
  let randZoom = getRandomInt(2)+0.2
  let randStroke = getRandomInt(20)+2
  let randDepth = getRandomInt(40)+10


let newObjt = anchor.copyGraph({
  translate: { x: posX, y: posY, z:posZ },
  scale: randZoom,
});

newObjt.children[0].stroke = randStroke
newObjt.children[1].depth = randStroke
newObjt.children[0].translate.x = posX
newObjt.children[2].translate = { x: posX*5, y: posY*5, z:posZ*5 }
newObjt.children[3].translate = { x: posY*5, y: posX*5, z:posZ*2 }
  
 objs.push({newObjt,randRot})

}

  anchor.remove()


function animate() {
    
  objs.forEach( function( obj ) {
     let viewRotation = obj.randRot
    obj.newObjt.rotate.y += viewRotation ;
    viewRotation = 0
});  
    illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}