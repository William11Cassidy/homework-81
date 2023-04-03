canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

color="blue"
circle(200,200)
color="yellow"
circle(250,250)
color="black"
circle(300,200)
color="green"
circle(350,250)
color="red"
circle(400,200)
function circle(x,y){
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=5;
    ctx.arc(x,y,40,0,2*Math.PI)
    ctx.stroke()
    
}
    