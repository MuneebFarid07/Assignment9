// JavaScript Document
// chapter 38-42
// ==============================================================================================================================

// task 1

function square12(a, b) {
  var num = a * b;
  alert(num);
}

// task 2

function leapyear() {
  var year = +prompt("enter a number to check wheather its leap year or not");
  if (year % 4 == 0) {
    alert(year + " is a leap year");
  } else {
    alert(year + " is not a leap year");
  }
}

// task 3

function main() {
  var a = +prompt("enter value 1");
  var b = +prompt("enter value 2");
  var c = +prompt("enter value 3");
  var s;
  function side() {
    s = (a + b + c) / 2;
  }

  function area() {
    var area123;
    side();
    area123 = s * (s - a) * (s - b) * (s - c);
    alert(area123);
  }

  area();
}

// task 4

function first() {
  var a = +prompt("enter your marks in first subject");
  var b = +prompt("enter your marks in second subject");
  var c = +prompt("enter your marks in third subject");

  function average() {
    var ave = (a + b + c) / 3;
    var sc = Math.round(ave);
    alert("average is : " + sc);
  }
  function percent() {
    var pr = ((a + b + c) / 300) * 100;
    var rp1 = Math.round(pr);
    alert("percentage : " + rp1);
  }
  average();
  percent();
}

// task 8

function kmmm() {
  var tek = +prompt("enter the kilomters you want to convert");
  var tek2 = prompt(
    "in what you want to convert the kilometer",
    "meters, feet, inches or centimeters"
  );
  tek2.toLowerCase();
  switch (tek2) {
    case "meters":
      var con = tek * 1000;
      alert(con + " meters");
      break;

    case "feet":
      var con2 = tek * 3281;
      alert(con2 + " feet");
      break;

    case "inches":
      var con3 = tek * 39370;
      alert(con3 + " inches");
      break;

    case "centimeters":
      var cont4 = tek * 100000;
      alert(cont4 + " centimeters");
      break;

    default:
      alert("enter right value");
      break;
  }
}

// task 9

function payme() {
  var ent = +prompt("write your actual salary");
  var ent1 = +prompt("write hours you work extra", "24,12,2");
  var sec = 12 * ent1;
  var compi = ent + sec;
  alert(
    "your salary is " +
      ent +
      " your total salary after extra hours of work " +
      compi
  );
}

// chapter 43-48
// ==============================================================================================================================

// task 1

function alt() {
  alert("i am showing alert box on click");
}

// task 2

function purch() {
  alert("thanks for purchasing a smart phone");
}

// task 3

var get1 = document.getElementById("godd");
var get12 = document.getElementById("godd1");
var get2 = document.getElementById("godd2");
var get3 = document.getElementById("godd3");
var get31 = document.getElementById("godd4");
var get4 = document.getElementById("godd5");
function del() {
  get1.style.display = "none";
}
function del1() {
  get12.style.display = "none";
}
function del2() {
  get2.style.display = "none";
}
function del3() {
  get3.style.display = "none";
}
function del4() {
  get31.style.display = "none";
}
function del5() {
  get4.style.display = "none";
}
function unodo() {
  get1.style.display = "";
  get12.style.display = "";
  get2.style.display = "";
  get3.style.display = "";
  get31.style.display = "";
  get4.style.display = "";
}
// task 4

function cahnge(id, src) {
  var get = document.getElementById(id);
  get.src = src;
}

// task 5

//var vl1 = document.getElementById("zer");
//var vl2 = document.getElementById("btn1");
//var vl3 = document.getElementById("btn2");
//
//vl2.addEventListener("click", () => {
//  vl1.value = parseInt(vl1.value) + 1;
//});
//vl3.addEventListener("click", () => {
//  vl1.value = parseInt(vl1.value) - 1;
//});

// chapter 49-52
// ==============================================================================================================================

// task 1


var row = 1;
function displing() {
  var fis = document.getElementById("firstna").value;
  var lis = document.getElementById("lastna").value;
  var gis = document.getElementById("agena").value;

  if (!fis || !lis || !gis) {
    alert("please fill all the inputs");
    return;
  }

  var apend = document.getElementById("apend");

  var rownew = apend.insertRow(row);

  var cell1 = rownew.insertCell(0);
  var cell2 = rownew.insertCell(1);
  var cell3 = rownew.insertCell(2);

  cell1.innerHTML = fis;
  cell2.innerHTML = lis;
  cell3.innerHTML = gis;

  row++;
}

// task 2

var i = 0;
function redmore() {
  var gt = document.getElementById("reademore");
  var gh = document.getElementById("bntn");
  if (!i) {
    gt.style.display = "inline";
    gh.innerHTML = "read less";
    gh.style.color = "red";
    i = 1;
  } else {
    gt.style.display = "none";
    gh.innerHTML = "read more";
    i = 0;
    gh.style.color = "blue";
  }
}

// task 3
var rw = 1;
var reva = document.getElementById("reva");
function rm123() {
  var stname = document.getElementById("studentname");
  var stclass = document.getElementById("studentclass");
  var strollnumber = document.getElementById("studentrollnumber");

  var delbtn = document.createElement("button");
  var text1 = document.createTextNode("delete");
  delbtn.appendChild(text1);
  delbtn.setAttribute("onclick", "delparent(this)");

  var eitbtn = document.createElement("button");
  var texteit = document.createTextNode("edit");
  eitbtn.appendChild(texteit);
  eitbtn.setAttribute("onclick", "eitparent(this)");

  if (!stname.value || !stclass.value || !strollnumber.value) {
    alert("fill all the inputs");
    return;
  }

  var newrow = reva.insertRow(rw);

  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);
  var cell4 = newrow.insertCell(3);
  var cell5 = newrow.insertCell(4);

  cell1.innerHTML = stname.value;
  cell2.innerHTML = stclass.value;
  cell3.innerHTML = strollnumber.value;
  cell4.appendChild(delbtn);
  cell5.appendChild(eitbtn);

  stname.value = "";
  stclass.value = "";
  strollnumber.value = "";

  // rw++;
}
function delparent(e) {
  e.parentNode.parentNode.remove();
}
function eitparent(y) {
  var change1 = prompt(
    "edit cell one",
    y.parentNode.parentNode.childNodes[0].innerHTML
  );
  var change2 = prompt(
    "edit cell two",
    y.parentNode.parentNode.childNodes[1].innerHTML
  );
  var change3 = prompt(
    "edit cell three",
    y.parentNode.parentNode.childNodes[2].innerHTML
  );
  y.parentNode.parentNode.childNodes[0].innerHTML = change1;
  y.parentNode.parentNode.childNodes[1].innerHTML = change2;
  y.parentNode.parentNode.childNodes[2].innerHTML = change3;
}

// chapter 58-67
// ==============================================================================================================================

// task 1

function konhebhai(e) {
  var image = document.querySelector(".something");
  image.src = e.src;
  var fs = document.querySelector(".whole");
  fs.style.display = "block";
  // console.log(e.src);
}
function close456() {
  var ing123 = document.querySelector(".whole");
  ing123.style.display = "none";
}
// chapter 58-67
// ==============================================================================================================================

// task 1

// 1

var dom = document.getElementById("main-content");

// 2
console.log(dom.childNodes);

// 3

console.log(dom.hasAttribute("class", "render").innerHTML);

// 4

var fil12 = document.getElementById("first-name");
fil12.value = "abdullah";

// 5

var fil121 = document.getElementById("last-name");
fil121.value = "mehboob";
var fil1212 = document.getElementById("email");
fil1212.value = "abdullahmehboob307@gmail.com";

// 2 part 1

var dm2 = document.getElementById("form-content");
console.log(dm2.nodeType);

// 2

var a1 = document.getElementById("last-name");
console.log(a1.nodeType);
console.log(a1.childNodes);

// 4

var dom = document.getElementById("main-content");
console.log(dom.firstChild);
console.log(dom.lastChild);

// 5

var a1 = document.getElementById("last-name");
console.log(a1.previousSibling);
console.log(a1.nextSibling);

// 6
var fil1212 = document.getElementById("email");
console.log(fil1212.parentNode);
console.log(fil1212.nodeType);

