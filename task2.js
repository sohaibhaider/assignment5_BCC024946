var rWidth = parseInt(prompt("Please Enter Width of the Rectangle:", 4));
var rHeight = parseInt(prompt("Please Enter Height of the Rectangle:", 3));

document.write("i)  Arguments passed as values 'area(4, 5)': "+area(4, 5));
document.write("<br/>ii) Arguments passed as variables 'area(rWidth, rHeight)': "+area(rWidth, rHeight));

function area(width, height){
    return width*height;
}