document.write("<h3>Question1</h3>");
var city=prompt("Enter city name");
if(city==="Lahore"){
    alert("Welcome to city of heaven");
}
document.write("<h3>Question2</h3>");
var gender=prompt("Enter your gender");
if(gender==="male"){
    alert("Good Morning Sir");
}
else{
    alert("Good Morning Ma'am");
}
document.write("<h3>Question3</h3>");
var signal=prompt("Road Signal Color?");
if(signal==="red"){
    alert("Must stop");
}
else if(signal==="yellow"){
    alert("Ready to move");
}
else if(signal==="green"){
    alert("Move now");
}
else{
    alert("You entered wrong");
}
document.write("<h3>Question4</h3>");
var fuel=prompt("Remaining fuel in Car?");
if(parseFloat(fuel)<0.25){
    alert("Please refill the fuel in your car");
}
document.write("<h3>Question5</h3>");
var a = 4;
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}
var b = 82;
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
} 
var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true"); 
}
var materialCost = 20000;
var laborCost = 2000; 
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
} 
if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False"); 
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}
document.write("<h3>Question6</h3>");
var marks1=parseFloat(prompt("Enter sub1 marks"));
var marks2=parseFloat(prompt("Enter sub2 marks"));
var marks3=parseFloat(prompt("Enter sub3 marks"));
var totalmarks=parseFloat(prompt("Enter Total marks"));
var per=((marks1+marks2+marks3)/totalmarks)*100;
document.write("Percentege: "+per+"<br>");
var marksobtained,grade,remarks;
if(per>=80){
    marksobtained=marks1+marks2+marks3;
    grade="A-one";
    remarks="Excellent";
    document.write("Total Marks: "+totalmarks+"<br>Marks Obtained: "+marksobtained+"<br>Percentege: "+per+"<br>Grade: "+grade+"<br>Remarks: "+remarks+"<br>");
}
else if(per>=70){
    marksobtained=marks1+marks2+marks3;
    grade="A";
    remarks="Good";
    document.write("Total Marks: "+totalmarks+"<br>Marks Obtained: "+marksobtained+"<br>Percentege: "+per+"<br>Grade: "+grade+"<br>Remarks: "+remarks+"<br>");
}
else if(per>=80){
    marksobtained=marks1+marks2+marks3;
    grade="B";
    remarks="You need to improve";
    document.write("Total Marks: "+totalmarks+"<br>Marks Obtained: "+marksobtained+"<br>Percentege: "+per+"<br>Grade: "+grade+"<br>Remarks: "+remarks+"<br>");
}
else{
    marksobtained=marks1+marks2+marks3;
    grade="F";
    remarks="Sorry";
    document.write("Total Marks: "+totalmarks+"<br>Marks Obtained: "+marksobtained+"<br>Percentege: "+per+"<br>Grade: "+grade+"<br>Remarks: "+remarks+"<br>");
}
document.write("<h3>Question7</h3>");
secretnumber=7;
var guess=parseInt(prompt("Guess number between 1-10"));
if(guess===secretnumber){
    document.write("Bingo! Correct answer");
}
else if(guess+1===secretnumber){
    document.write("Close enough to the correct answer");
}
else{
    document.write("Wrong guessed");
}
document.write("<h3>Question8</h3>");
var gnum=parseInt(prompt("Enter any number to check divisibility by 3"));
if(gnum%3==0){
    document.write(gnum+" is divisible by 3");
}
else{
    document.write(gnum+" is not divisible by 3")
}
document.write("<h3>Question9</h3>");
var checknum=parseInt(prompt("Enter any number to check even or odd"));
if(checknum%2==0){
    document.write(checknum+" is even number");
}
else{
    document.write(checknum+" is odd number")
}
document.write("<h3>Question10</h3>");
var temp=parseInt(prompt("Enter temperature"));
if(temp>40){
    document.write("It is too hot outside");
}
else if(temp>30){
    document.write("The Weather today is Normal");
}
else if(temp>20){
    document.write("Today’s Weather is cool");
}
else if(temp<10){
    document.write("OMG! Today’s weather is so Cool");
}
else{
    document.write("Sorry, you entered wrong");
}
document.write("<h3>Question11</h3>");
var fnum=parseInt(prompt("Enter First number"));
var snum=parseInt(prompt("Enter Second number"));
var operator=prompt("Enter Operator");
if(operator==="+"){
    document.write(fnum+" + "+snum+" = "+(fnum+snum))
}
else if(operator==="-"){
    document.write(fnum+" - "+snum+" = "+(fnum-snum))
}
else if(operator==="*"){
    document.write(fnum+" * "+snum+" = "+(fnum*snum))
}
else if(operator==="/"){
    document.write(fnum+" / "+snum+" = "+(fnum/snum))
}
else if(operator==="%"){
    document.write(fnum+" % "+snum+" = "+(fnum%snum))
}
else{
    document.write("Wrong Input");
}