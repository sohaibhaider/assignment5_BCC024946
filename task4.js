var circleRadius = parseFloat(prompt("Please Enter Radius to find Circumference and Area of the Circle:", 5));

document.write("The Radius = " + circleRadius + "<br/>The Circumference ≈ " + calcCircumference(circleRadius).toFixed(2) + "<br/>The Area ≈ " + calcArea(circleRadius).toFixed(2));

function calcCircumference(radius){
    return 2*Math.PI*radius;
}

function calcArea(radius){
    return (Math.PI*radius**2);
}