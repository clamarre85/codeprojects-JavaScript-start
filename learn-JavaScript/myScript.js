function displayDateTime() {

    var currentDate = new Date();

    var formattedDateTime = currentDate.toLocaleString();

    document.getElementById("demo").innerHTML = formattedDateTime;
}

function hideDateTime() {

    document.getElementById("demo").innerHTML = "";
}



function changeText() {

    document.getElementById("example").innerHTML = "Hello JavaScript!";
}

function originalText() {

    document.getElementById("example").innerHTML = "JavaScript can change HTML content.";
}



function lightON() {

    document.getElementById("myImage").src='/images/pic_bulbon.gif';
}

function lightOFF() {

    document.getElementById("myImage").src='/images/pic_bulboff.gif';
}



function bigFONT() {

    document.getElementById("bigger").style.fontSize='35px';
}

function smFONT() {

    document.getElementById("bigger").style.fontSize='';
}



function hideME() {

    document.getElementById("hide").innerHTML = "";
}

function originalME() {

    document.getElementById("hide").innerHTML = "JavaScript can hide HTML elements.";
}



function showME() {

    document.getElementById("show").style.display='block';
}

function hiddenME() {

    document.getElementById("show").style.display='none';
}



document.getElementById("add").innerHTML = 6 + 6; 



var message = "Hey, I am an Alert!";
alert(message);
document.getElementById("alert").innerHTML = message;


console.log (5+6)



let x, y, z; //statement 1
x = 5; //statement 2
y = 6; //statement 3
z = x + y; //statement 4

document.getElementById("statements").innerHTML = "The value of z is " + z + ".";



document.getElementById("hello").innerHTML = "Hello Dolly";



function codeBlock() {
    document.getElementById("demo1").innerHTML = "Hello Again!"

    document.getElementById("demo2").innerHTML = "How are you?"
}

function codeBlockoff() {
    document.getElementById("demo1").innerHTML = ""

    document.getElementById("demo2").innerHTML = ""
}



let f;
f = 6;
document.getElementById("value").innerHTML = f;



document.getElementById("operators").innerHTML = (5 + 6) * 10;