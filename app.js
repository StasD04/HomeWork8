function colorGenerate() {
    return Math.floor(Math.random() * 256)
}
let leb = document.getElementById('lebedev')
function colorChanger () {
    let red = colorGenerate()
    let green = colorGenerate()
    let blue = colorGenerate()
    leb.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`
    if ( (red * 0.3) + (green * 0.59) + (blue * 0.11) <70 ){
        leb.style.color="white"}
    else {leb.style.color="black"}
}
colorChanger()
leb.addEventListener("mouseover", function () {  colorChanger() })
