// Chapter # (21 - 25)
// 1
var fn = prompt("Enter First Name");
var ln = prompt("Enter Last Name");
var fc = fn.charAt(0);
fn = fc.toUpperCase() + fn.slice(1,fn.length);
var fullName = fn + " " + ln;
alert("Good Evening " + fullName);

// 2
var phoneModel = prompt("Enter your Favourite mobile model");
document.write("My Favourite Phone is:" + phoneModel + "<br>Length of string: " + phoneModel.length);

// 3
var a = "pakistani";
document.write("<br><br>String: " + a);
document.write("<br>Index of 'n': " + a.indexOf('n'));

// 4
var b = "Hello World!";
document.write("<br><br>String: " + b);
document.write("<br>Index of 'n': " + b.lastIndexOf('l'));

// 5
var c = "Pakistani";
document.write("<br><br>String: " + c);
document.write("<br>Character at Index 3: " + c.charAt(3));

// 6
var fn = prompt("Enter First Name");
var ln= prompt("Enter Last Name");
var fc = fn.charAt(0);
fn = fc.toUpperCase() + fn.slice(1,fn.length) + " ";
var fullName = fn.concat(ln);
alert("Good Night " + fullName);

// 7
var str = "Hyderabad";
var strReplaced = str.replace("Hyder","Islam");
document.write("<br><br>City: " + str);
document.write("<br>After replacement: " + strReplaced);

// 8
var msg = "Ali and Sami are best friends. They play cricket and football together.";
var msgReplaced = msg.replace(/and/g,"&");
document.write("<br><br>Message: " + msg);
document.write("<br>Message after replacement: " + msgReplaced);

// 9
var val = "472";
var valueInt = Number(val);
document.write("<br><br>Value: " + val);
document.write("<br>Type: " + typeof(val));
document.write("<br><br>Value: " + valueInt);
document.write("<br>Type: " + typeof(valueInt));

// 10
var userInput = prompt("Enter Somthing to Convert it to UPPERCASE");
var userInputUpper = userInput.toUpperCase();
document.write("<br><br>User Input: " + userInput);
document.write("<br>Upper case: " + userInputUpper);

// 11
var userInput = prompt("Enter Somthing to show it in Title case");
var firstCapital = userInput.charAt(0);
var titleCase = firstCapital.toUpperCase() + userInput.slice(1,userInput.length);
document.write("<br><br>User Input: " + userInput);
document.write("<br>Title case: " + titleCase);

// 12
var num = 35.36;
var numString = num.toString();
document.write("<br><br>Number: " + num);
document.write("<br>Result: " + numString.replace(".",""));

// 13
var username = prompt("Enter username:");
username = username.toUpperCase();
for(var i = 0 ; i<username.length ; i++){
    if(username.charCodeAt(i)==33 || username.charCodeAt(i)==44 || username.charCodeAt(i)==46 || username.charCodeAt(i)==65){
        alert("Please enter a valid username");
        break;
    }
}

// 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to Bakery. What do you want to order Sir/Ma'am");
var flag = 0;
order = order.toLowerCase();
for(var i ; i<A.length ; i++){
    if(A[i] == order){
        document.write("<br><br>" + order + " is <strong>Available</strong> at index "+ i + " in our bakery");
        flag=1;
    }
}

if(flag==0){
    document.write("<br><br>We are Sorry. " + order + " is <strong>not available</strong> in our bakery")
}

// 15
var password = prompt("Enter a Password");
if(password.length>=6){
    if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57){
        alert("Password can not begin with a Number");
    }
    else{
        for(var i=1 ; i<password.length ; i++){
            if((password.charCodeAt(i)>=65&&password.charCodeAt(i)<=90)||(password.charCodeAt(i)>=97&&password.charCodeAt(i)<=122)||(password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57)){

            }else{
                alert("Please enter a Valid password1");
                break;
            }
        }
    }
}else{
    alert("Please enter a Valid password2");
}

// 16
var uni = "University of Karachi";
uni = uni.split("");
document.write("<br>");
for(var i=0 ; i<uni.length ; i++){
    document.write("<br>"+uni[i]);
}

// 17
var userInput = prompt("Enter String to Show its last character");
document.write("<br><br>User input: "+userInput);
document.write("<br>Last Character: "+userInput[userInput.length-1]);

// 18
var text = "The quick brown fox jumps over the lazy dog";
var textL = text.toLowerCase();
var count = 0;
for(var i=0 ; i<text.length ; i++){
    if(textL.slice(i,i+3) == "the"){
        count++;
    }
}
document.write("<br><br>Text: "+text);
document.write("<br>There are "+count+" occurrence(s) of word 'the'");


// Chapter # (26-30)
// 1
var number = +prompt("Enter a number");
document.write("<br><br>Number: "+number);
document.write("<br>round off value: "+Math.round(number));
document.write("<br>floor value: "+Math.floor(number));
document.write("<br>ceil value: "+Math.ceil(numner));

// 2
var num = +prompt("Enter a floating point number");
document.write("<br><br>Number: "+num);
document.write("<br>round off value: "+Math.round(num));
document.write("<br>floor value: "+Math.floor(num));
document.write("<br>ceil value: "+Math.ceil(num));

// 3
var num = +prompt("Enter a number to display it in absolute");
document.write("<br><br>The absolute value of "+num+" is "+Math.abs(num));

// 4
var rand = Math.floor(Math.random()*6+1);
document.write("<br><br><strong>random dice value: </strong>"+rand);
var rand = Math.floor(Math.random()*6+1);
document.write("<br><strong>random dice value: </strong>"+rand);

// 5
var rand1 = Math.floor(Math.random()*2+1);
if(rand1 == 1){
    document.write("<br><br><strong>1<br>random coin value: Tails</strong>");
}else if(rand1 == 2){
    document.write("<br><br><strong>2<br>random coin value: Heads</strong>");
}

// 6
var rand1 = Math.floor(Math.random()*200+2);
document.write("<br><br><strong>2<br>random Number between 1 and 100: </strong>"+rand1);

// 7
var weight = prompt("Enter your weight in kilograms");
var num = '';
for(var i=0 ; i<weight.length ; i++){
    if(weight.charCodeAt(i)>=48 && weight.charCodeAt(i)<=57){
        num = num+weight[i];
    }else if(weight.charCodeAt(i)==46){
        num = num+weight[i];
    }else{
        break;
    }
}
document.write("<br><br><strong>The weight of user is "+ num +" kilograms</strong>");

// 8
var rand1 = Math.floor(Math.round()*10+1);
var userRand = +prompt("Enter a number between 1 and 10");
if(rand1 == userRand){
    alert("Congrates you are lucky");
}else{
    alert("Try again");
}

// Chapter # (31-34)
// 1
var currDate = new Date();
document.write("<br><br><h3>"+ currDate + "</h3>");

// 2
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var currDate = new Date();
var currentMonth = currDate.getMonth();
alert("Current month: "+ months[currentMonth]);

// 3
var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var currentDate = new Date();
var currentWeekDay = currentDate.getDay();
document.write("<h3>Today is "+ weekDays[currentWeekDay] + "</h3>");

// 4
var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var currentDate = new Date();
var currentWeekDay = currentDate.getDay();
if((weekDays[currentWeekDay] == 'Sun') ||(weekDays[currentWeekDay] == 'Sat')){
    document.write("<h3>It's Fun day</h3>");
}

// 5
var currentDate = new Date();
if(currentDate.getDate() <16){
    document.write("<h3>First fifteen days of the month</h3>");
}else{
    document.write("<h3>Last days of the month</h3>")
}

// 6
var currentDate = new Date();
var miliSeconds = currentDate.getTime();
var minutes = miliSeconds/(1000*60)
document.write("<h3>Current date: "+ currentDate +"</h3>");
document.write("<h3>Elapsed seconds since January 1, 1970: "+ miliSeconds +"</h3>");
document.write("<h3>Elapsed minutes since January 1, 1970: "+ minutes +"</h3>");

// 7
var currentDate = new Date();
var hour = currentDate.getHours();
if(hour < 11){
    document.write("<h3>It's AM</h3>");
}else{
    document.write("<h3>It's PM</h3>");
}

// 8
var lastDayOfYear = new Date('Dec 31, 2020');
document.write("<h3>"+ lastDayOfYear +"</h3>");

// 9
var firstDayOfRamadan = new Date('Apr 24, 2020');
var currentDate = new Date();
firstDayOfRamadan = firstDayOfRamadan.getTime();
currentDate = currentDate.getTime();
var diff = currentDate - firstDayOfRamadan;
diff = diff/(1000*60*60*24);
document.write("<h3>"+Math.floor(diff)+" days have passed since 1st Ramadan, 2020</h3>");

// 10
var refDate = prompt("Enter Reference Date","Fri 20, 2020");
alert(refDate+"<br> "+typeof(refDate));
var refDate = new Date(refDate);
var bigOf2015 = new Date('Jan 1, 2015');
refDate = refDate.getTime();
bigOf2015 = bigOf2015.getTime();
var diff = refDate - bigOf2015;
diff = diff/(1000*60);
document.write("<h3>"+ diff +" seconds had passed since beginning of 2015</h3>");

// 11
var currentDate = new Date();
var currentHour = currentDate.getHours();
currentDate.setHours(currentDate.getHours() + 1) 
document.write("<h3>current date: "+ currentDate +"</h3>");
document.write("<h3>1 hour ago it was "+ new Date() +"</h3>");

// 12
var currentDate = new Date();
document.write("<h3>current date: "+ currentDate +"</h3>");
currentDate.setFullYear(currentDate.getFullYear()-100);
document.write("<h3>100 years back, it was "+ currentDate +"</h3>");

// 13
var age = +prompt("Enter your Age");
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear()-age);
document.write("<br><h3>Your age is "+ age +"</h3>");
document.write("<h3>Your birth year is "+ currentDate.getFullYear() +"</h3>");

// 14
var customerName = 'XYZ Customer';
var currentDate = new Date();
var currentMonth = months[currentDate.getMonth()];
var numberOfUnits = 410;
var chargesPerUnit = 16;
var netAmountPayable = numberOfUnits*chargesPerUnit;
var latePayable = 350;
var grossAmount = netAmountPayable+latePayable;

document.write("<br><h1>K-Electric Bill</h1><br>");
document.write("<br>Customer Name: <strong>"+customerName+"</strong>");
document.write("<br>Month: <strong>"+customerName+"</strong>");
document.write("<br>Number of units: <strong>"+numberOfUnits+"</strong>");
document.write("<br>Charges per unit: <strong>"+chargesPerUnit+"</strong>");
document.write("<br><br>Net Amount payable (within Due Date): <strong>"+netAmountPayable+"</strong>");
document.write("<br>Late Payment Surcharge: <strong>"+latePayable+"</strong>");
document.write("<br>Gross amount payable (within due date): <strong>"+grossAmount+"</strong>");


// Chapter # (35-38)
// 1
function currentDatee(){
    document.write("<h3>"+ new Date() +"</h3>");
}
currentDatee();

// 2
function greetUser(firstName,lastName){
    document.write("<h3>WELCOME TO MY WEBSITE "+ firstName + " " + lastName +"</h3>");
}
greetUser("Babar","Farooq");

// 3
function sum(){
    var num1 = +prompt("Enter Num 1");
    var num2 = +prompt("Enter Num 2");
    return (num1+num2)
}
document.write("Sum of Two Numbers is "+sum());

// 4
function calc(num1,num2,operator){
    var result = 0;
    if(operator == '+'){
        result = (num1 + num2);
    }else if(operator == '-'){
        result = Math.abs(num1 - num2);
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }else if(operator == '%'){
        result = num1%num2;
    }
    return result;
}
var num1 = +prompt("Enter Number 1 for Calculator");
var num2 = +prompt("Enter Number 2 for Calculator");
var operator = prompt("Enter Operation for Calculator");
document.write("<h3>Result Computed by Calculator "+calc(num1,num2,operator)+"</h3>");

// 5
function square(num){
    document.write("<h3>Square: "+ num*num +"</h3>");
}
square(4);

// 6
function fact(num){
    var result = 1;
    for(var i=1 ; i<=num ; i++){
        result *= i;
    }
    return result;
}
document.write("<h3>Factorial of 4 is: "+ fact(4) +"</h3>");

// 7
function counting(){
    var start = +prompt("Enter start number of counting");
    var end = +prompt("Enter end number of counting");
    for(var i=start ; i<=end ; i++){
        document.write("<strong>"+ i +" </strong>");
    }
}
counting();

// 8
function calculateHypotenuse(base,perpendicular){
    function calculateSquare(num){
        return num*num;
    }
    var hypotenuse = calculateSquare(base)+calculateSquare(perpendicular);
    return hypotenuse;
}
var base = +prompt("Enter base of Triangle");
var perpendicular = +prompt("Enter perpendicular of Triangle");
document.write("<h3>Hypotenuse: "+calculateHypotenuse(base,perpendicular)+"</h3>");

// 9
function areaOfRect(num1,num2){
    document.write("<br><strong>Area of Rectangle: "+ num1*num2 +"</strong>");
}
areaOfRect(2,2)
var a=2,b=3;
areaOfRect(a,b);

// 10
var a=0;
function palindrom(str1){
    if((str1.length%2)!=0){
        for(var i=0 ; i<=Math.floor(str1.length/2) ; i++){
            if(str1[i] == str1[str1.length-(i+1)]){
                
            }else{
                a=1;
                document.write("<br><br><strong>NOT PALINDROM</strong>");
            }
        }
    }else if((str1.length%2)==0){
        for(var i=0 ; i<(str1.length/2) ; i++){
            if(str1[i] == str1[str1.length-(i+1)]){

            }else{
                a=1;
                document.write("<br><br><strong>NOT PALINDROM</strong>");
            }
        }
    }
    if(a==0){
        document.write("<br><br><strong>"+ str1 +" IS PALINDROM</strong>");
    }
}
palindrom("hannah");

// 11
function firstCapital123(str1){
    str1 = str1[0].toUpperCase()+str1.slice(1);
    for(var i=1 ; i<str1.length ; i++){
        if(str1[i] == ' '){
            str1 = str1.slice(0,i+1)+str1[i+1].toUpperCase()+str1.slice(i+2);
        }
    }
    document.write("<br><br><strong>"+ str1 +"</strong>");
}
firstCapital123('the quick brown fox');

// 12
function maxLength(str1){
    str1 = str1.split(' ');
    var maxl = str1[0];
    for(var i=1 ; i<str1.length-1 ; i++){
        if(maxl.length<str1[i].length){
            maxl = str1[i];
        }
    }
    document.write("<br><br><strong>Max Length Word Is: "+ maxl +"</strong>");
}
maxLength('Web Development Tutorial');

// 13
function occurrence(str1,alpha){
    var count = 0;
    for(var i=0 ; i<str1.length ; i++){
        if(alpha == str1[i]){
            count++;
        }
    }
    document.write("<br><br><strong>Occurences of "+alpha+" in "+str1+" is: "+ count +"</strong>");
}
occurrence('JSResourceS.com','o');

// 14
function calcCircumference(radius){
    document.write("<br><br><strong>The Circumference Is: "+ 2*3.14*radius +"</strong>");
}
calcCircumference(2);
function calcArea(radius){
    document.write("<br><br><strong>The Area Is: "+ 3.14*radius*radius +"</strong>");
}
calcArea(2);