
/// https://codepen.io/eagj/pen/wavwGR

$(document).ready(function(){
    var clic=false;
    var xCoord,yCoord="";
    var canvas=document.getElementById("can");
    var cntx=canvas.getContext("2d");
    cntx.strokeStyle="red";
    cntx.lineWidth=10;
    cntx.lineCap="round";
    cntx.fillStyle="#fff";
    cntx.fillRect(0,0,canvas.width,canvas.height);

    $("#can").mousedown(function(canvas){
        clic=true;
        cntx.save();
        xCoord=canvas.pageX-this.offsetLeft;
        yCoord=canvas.pageY-this.offsetTop
    });

    $(document).mouseup(function(){
        clic=false
    });

    $(document).click(function(){
        clic=false
    });

    $("#can").mousemove(function(canvas){
        if(clic==true){
            cntx.beginPath();
            cntx.moveTo(canvas.pageX-this.offsetLeft,canvas.pageY-this.offsetTop);
            cntx.lineTo(xCoord,yCoord);
            cntx.stroke();
            cntx.closePath();
            xCoord=canvas.pageX-this.offsetLeft;
            yCoord=canvas.pageY-this.offsetTop
        }
    });

    $("#clr > div").click(function(){
        cntx.strokeStyle=$(this).css("background-color");
    });
    
    $("#clear").click(function(){
        cntx.fillStyle="#fff";
        cntx.fillRect(0,0,canvas.width, canvas.height);
        cntx.strokeStyle="red";
        cntx.fillStyle="red"
    })
})
