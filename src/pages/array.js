// 1Create a function that takes an array and returns the first element.
function getfirstvalue () {
    var getnumber = [8,2,3];
    console.log(getnumber[0])
}

getfirstvalue ();

// 2Write a function that converts hours into seconds.
function howMAnySeconds (hour){
    var minut = hour * 60
    var seconds = minut * 60
    console.log ("Hour convert to the minut " + minut)
    console.log("Minut convert to the second " + seconds)
}

howMAnySeconds (1);

// 3Create a function that takes the age and return the age in days.

function calcAge (year) {
    var day = year * 365
    var hour = day * 24
    var minut = hour * 60
    console.log (day);
    console.log (hour);
    console.log ( "hour convert to the minut " + minut);
}

calcAge(20);


// 4Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition (number){
    var num = number + 1;
    console.log (num);
}
addition(4);

// 4 Write a function that takes the base and height of a triangle and return its area.

function TriArea (base,height){
    var triangle  = (base * height)/2
    console.log (triangle);
}

TriArea(3,2);