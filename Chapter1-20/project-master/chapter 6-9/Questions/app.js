document.write("<h3>Question1</h3>");
var number=21;
document.write("Result:<br>The value of is: "+number+"<br>...............................<br>");
document.write("<br>The value of ++a is: "+(++number));
document.write("<br>Now the value of a is: "+number+"<br>");
document.write("<br>The value of a++ is: "+(number++));
document.write("<br>Now the value of a is: "+number+"<br>");
document.write("<br>The value of --a is: "+(--number));
document.write("<br>Now the value of a is: "+number+"<br>");
document.write("<br>The value of a-- is: "+(number--));
document.write("<br>Now the value of a is: "+number+"<br>");
document.write("<h3>Question2</h3>");
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;
document.write("--a(Pre-decrement) --> --a = 1<br>");
document.write("--b(Pre-decrement) --> --a- --b = 1-0 = 1<br>");
document.write("++b(Pre-increment) --> --a - --b + ++b = 1-0+1 = 2<br>");
document.write("b--(Post-decement) --> --a - --b + ++b + b-- = 1-0+1+1 = 3<br>");
document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");
document.write("Result is "+result+"<br>");
document.write("<h3>Question3</h3>");
var visitorName = prompt("Your name?", "Enter your name");
alert("Hi! Welcome "+visitorName);
document.write("<h3>Question4</h3>");
document.write("Not available in the provided pdf");
document.write("<h3>Question5</h3>");
var tableOf=parseInt(prompt("Enter number to print table"));
if(tableOf==null){
    for(var i=1;i<=10;i++){
        tableOf=5;
        document.write("<br>"+tableOf+" * "+i+" = "+(tableOf*i)+"");
    }
}
else{
    for(var i=1;i<=10;i++){
        document.write("<br>"+tableOf+" * "+i+" = "+(tableOf*i)+"");
    }
}
document.write("<h3>Question6</h3>");
var sub1=prompt("Enter first subject name");
var sub2=prompt("Enter second subject name");
var sub3=prompt("Enter third subject name");
EachSubMarks=100;
var marks1=parseFloat(prompt("Enter "+sub1+" marks"));
var marks2=parseFloat(prompt("Enter "+sub2+" marks"));
var marks3=parseFloat(prompt("Enter "+sub3+" marks"));
document.write("Subject|Total Marks|Obtained Marks|Percentage<br>");
document.write(sub1+" | "+EachSubMarks+" | "+marks1+" | "+(marks1/EachSubMarks*100)+"%<br>");
document.write(sub2+" | "+EachSubMarks+" | "+marks2+" | "+(marks2/EachSubMarks*100)+"%<br>");
document.write(sub3+" | "+EachSubMarks+" | "+marks3+" | "+(marks3/EachSubMarks*100)+"%<br>");
document.write("<h3>Question7</h3>");
document.write("Not available in the provided pdf");