const canvas = document.getElementById("canvas")
const body = document.getElementsByTagName("body")
const context = canvas.getContext("2d")

const w = canvas.width;
const h = canvas.height;

const mouse = {x: 0, y:0};
let draw = false;

canvas.addEventListener("mousedown", function(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  context.beginPath();
  context.moveTo(mouse.x, mouse.y);
  if(mouse.x > w || mouse.x < 0 || mouse.y > h || mouse.y < 0){
    draw = false
  } else{
    draw = true;
  }
})
canvas.addEventListener("mousemove", function (e){

  if(draw == true){
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y)
    context.stroke()
    console.log(`Мышь:${mouse.x}, Оффсет:${this.offsetLeft} `)
  }
  if(mouse.x > w - 20 || mouse.x < 20 || mouse.y > h - 20 || mouse.y < 20){
    context.closePath()
    draw = false

  }

})
canvas.addEventListener("mouseup", function(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  context.closePath()
  draw = false;
})