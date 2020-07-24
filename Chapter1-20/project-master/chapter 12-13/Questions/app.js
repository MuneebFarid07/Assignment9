document.write("<h3>Question1</h3>");
var character = prompt('Enter a character or Number: ');
if(character.charCodeAt() >= 65 && character.charCodeAt() <= 90){
    document.write( character + ' is a Uppercase Character');
}
else if(character.charCodeAt() >= 97 && character.charCodeAt() <= 122){
    document.write( character + ' is a Lowercase Character');
}
else if(character.charCodeAt() >= 48 && character.charCodeAt() <= 57){
    document.write( character + ' is a Number');
}
else{
    document.write('Invalid Character');
}
document.write("<h3>Question2</h3>");
var int1=+prompt("Enter First Integer");
var int2=+prompt("Enter Second Integer");
if(int1>int2){
    document.write("Larger integer: "+int1);
}
else if(int1===int2){
    document.write("Both integers are equal");
}
else{
    document.write("Larger integer: "+int2);
}
document.write("<h3>Question3</h3>");
var numb=+prompt("Enter any number");
if(numb>0){
    document.write(numb+ " is a Positive number");
}
else if(numb<0){
    document.write(numb+" is a Negative number");
}
else{
    document.write(numb+" is a Zero number")
}
document.write("<h3>Question4</h3>");
var charac=prompt("Enter any Character to check vowel");
if(charac==="a"|charac==="e"|charac==="i"|charac==="o"|charac==="u"|charac==="A"|charac==="E"|charac==="I"|charac==="O"|charac==="U"){
    document.write("True");
}
else{
    document.write("False");
}
document.write("<h3>Question5</h3>");
var pass="abc123"
var upass=prompt("Enter your Password");
if(upass==pass){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
}
document.write("<h3>Question6</h3>");
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day";
    }
else{
    greeting = "Good evening";
}
document.write("<h3>Question7</h3>");
var time=+prompt("Enter time accorging to 24 hour clock like 1900");
if(time>=0000 && time<1200){
    document.write("Good Morning");
}
else if(time>=1200 && time <1700){
    document.write("Good Afternoon");
}
else if(time>=1700 && time<2100){
    document.write("Good Evening");
}
else if(time>=2100 && time<=2359){
    document.write("Good Night");
}
else{
    document.write("You entered wrong");
}