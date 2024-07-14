const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
 
const w = canvas.width;
const h = canvas.height;
 
const mouse = { x:0, y:0};      // координаты мыши
let draw = false;
              
// нажатие мыши
canvas.addEventListener("mousedown", function(e){
      
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
});
// перемещение мыши
canvas.addEventListener("mousemove", function(e){
      
    if(draw == true){
      
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
    }
});
 
// отпускаем мышь
canvas.addEventListener("mouseup", function(e){
      
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;

    context.closePath();
    draw = false;
});