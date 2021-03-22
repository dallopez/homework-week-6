var calcEle = document.body.querySelector(".tipCalculator");

var inputBill = Number(prompt("What is your bill?"));

var taxedBill = inputBill * 1.07;

var tip = taxedBill * 0.05;

var finalBill = taxedBill + tip;
calcEle.innerHTML = "Your Total is $" + finalBill;
