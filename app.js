function colorgenerate() {
    return Math.floor(Math.random() * 256)
}
function colorchanger () {
    var color = document.getElementById("lebedev")
    var red = colorgenerate()
    var green = colorgenerate()
    var blue = colorgenerate()
    color.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
    if ( (red * 0.3) + (green * 0.59) + (blue * 0.11) <70 ){
        color.style.color="white";}
    else {color.style.color="black";}
}
setTimeout(colorchanger,10)
