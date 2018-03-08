var clear = document.getElementById("clear");
var svg = document.getElementById("svg");

var newCircle = function(x, y){
    var o = {
        cx: x,
        cy: y,
        fill: "lightsteelblue",
        remove: function(e){
            svg.removeChild(this);
            e.stopPropagation();
        },
        changeColor: function(e) {
            this.setAttribute("fill", "#88D498");
            e.stopPropagation();
            this.addEventListener('click', this.remove);
        },
        create: function() {
            var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c1.setAttribute("cx", this.cx);
            c1.setAttribute("cy", this.cy);
            c1.setAttribute("r", 10);
            c1.setAttribute("stroke", "#FFFFFF");
            c1.setAttribute("fill", this.fill);
            svg.appendChild(c1);
            c1.addEventListener('click', this.changeColor);
        }
    };
    return o;
}

var draw = function(e){
    //console.log(this);
    var rect = svg.getBoundingClientRect();
    var x = e.offsetX;
    var y = e.offsetY;
    var c1 = newCircle(x, y);
    c1.create();
}

var erase = function(){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
    started = false;
    console.log("cleared");
}

clear.addEventListener('click', erase);
svg.addEventListener('click', draw);