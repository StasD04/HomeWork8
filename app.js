function colorchanger () {
    var color = document.getElementById("lebedev")
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    color.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
    if ( (red * 0.3) + (green * 0.59) + (blue * 0.11) <70 ){
        color.style.color="white";}
    else {color.style.color="black";}
}
setTimeout(colorchanger,10)