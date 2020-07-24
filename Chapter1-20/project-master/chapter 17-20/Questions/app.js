document.write("<h3>Question1</h3>");
var MultiDimenArr=[[],[],[]];
document.write("<h3>Question2</h3>");
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var j=0;j<matrix.length;j++){
    for(var i=0;i<4;i++){
        document.write(matrix[j][i]+" ");
    }
    document.write("<br>");
}
document.write("<h3>Question3</h3>");
for(var a=1;a<=10;a++){
    document.write("<br>"+a);
}
document.write("<h3>Question4</h3>");
var table=+prompt("Enter number to print table");
var len=+prompt("Enter length of Table");
// document.write(table,len);
for(var t=1; t<=len; t++){
    document.write(+table+" x "+t+" = "+(table*t)+"<br>");
}
document.write("<h3>Question5</h3>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var f=0;f<fruits.length;f++){
    document.write("<br>"+fruits[f]);
}
for(f=0;f<fruits.length;f++){
    document.write("<br>Element at index "+f+" is "+fruits[f]);
}
document.write("<h3>Question6</h3>");
document.write("<h1>Counting:</h1>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<h1>Reverse counting:</h1>")
for (var j = 10; j >= 1; j--) {
    document.write(j + ", ");
}
document.write("<h1>Even:</h1>")
for (var k = 0; k <= 20; k++ + k++) {
    document.write(k + ", ");
}
document.write("<h1>Odd:</h1>")
for (var l = 1; l < 20; l++ + l++) {
    document.write(l + ", ");
}
document.write("<h1>Series:</h1>")
for (var m = 2; m <= 20; m++ + m++) {
    document.write(m + "k, ");
}

document.write("<h3>Question7</h3>");
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
userInput = userInput.toLowerCase();
for (var i = 0; i < arr.length; i++) {
    if (userInput === arr[i]) {
        document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
        break
    }
}
if (userInput !== arr[i]) {
    document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
}
document.write("<h3>Question9</h3>");
var A = [24, 53, 78, 91, 12],smaller;
for(var c=0;c<A.length;c++){
    for(var d=0;d<A.length;d++){
        if(A[c]<A[d]){
            smaller=A[c];
        }
    }
}
document.write("Array Items: "+A+"<br>The smallest number is "+smaller)
document.write("<h3>Question10</h3>");
for(var g=5;g<=100;g=g+5){
    document.write(g+",");
}