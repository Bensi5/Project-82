canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_position_of_x, last_position_of_y;
colour = "black";
lineWidth = 2;
radius = 5;
var mouseEvent = "empty";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value;
    lineWidth = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
//window.alert("Color="+colour+"lineWidth="+lineWidth+"radius="+radius);
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = lineWidth;
        console.log("current X= " + current_position_of_X + "currenty=" + current_position_of_Y);
        ctx.arc(current_position_of_X, current_position_of_Y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
