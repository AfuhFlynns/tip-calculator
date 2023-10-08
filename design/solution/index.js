// Defining Variables
let billInput = document.getElementById("billInput");
let numberFifteen = document.getElementById("numberFifteen");
let numberFive = document.getElementById("numberFive");
let numberTen = document.getElementById("numberTen");
let numberTwentiF = document.getElementById("numberTwentiF");
let numberFifty = document.getElementById("numberFifty");
let customNumber = document.getElementById("customNumber");
let numOfP = document.getElementById("numOfP");
const Errors = document.getElementById("Error");

// Resetting the values
let Reset = document.getElementById("Reset");
Reset.onclick = function () {
  Resetall();
  Errors.style.display = "none";
  numOfP.style.borderColor = "";
  Reset.style.backgroundColor = "hsl(172, 67%, 45%)";

      const performOnething = ()=>{
        numberFifty.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifty.style.color = "white";
        numberFive.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFive.style.color = "white";
        numberTen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberTen.style.color = "white";
        numberFifteen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifteen.style.color = "white";
        numberTwentiF.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberTwentiF.style.color = "white";
    }
      performOnething();
};

let billAmm;
let numberOfPeople;

// Defining output variables
let received_tip = document.getElementById("received_tip");
received_tip.textContent = "0.00";

let received_Totaltip = document.getElementById("received_Totaltip");
received_Totaltip.textContent = "0.00";

// Performing Calculations
numberFive.onclick = function () {
    const performOnething = ()=>{
        numberFifty.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifty.style.color = "white";
        numberFive.style.backgroundColor = "hsl(172, 67%, 45%)";
        numberFive.style.color = "hsl(183, 100%, 15%)";
        numberTen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberTen.style.color = "white";
        numberFifteen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifteen.style.color = "white";
        numberTwentiF.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberTwentiF.style.color = "white";

        Reset.style.backgroundColor = "hsl(183, 98%, 20%)";
    }
      performOnething();
  if (numberOfPeople > 0) {
    performCalcs(5);
    Errors.style.display = "none";
    numOfP.style.borderColor = "";
  } else {
    Errors.style.display = "block";
    numOfP.style.borderColor = "red";
  }
};

numberTen.onclick = function () {
    const performOnething = ()=>{
        numberFifty.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifty.style.color = "white";
        numberFive.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFive.style.color = "white";
        numberTen.style.backgroundColor = "hsl(172, 67%, 45%)";
        numberTen.style.color = "hsl(183, 100%, 15%)";
        numberFifteen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifteen.style.color = "white";
        numberTwentiF.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberTwentiF.style.color = "white";

        Reset.style.backgroundColor = "hsl(183, 98%, 20%)";
    }
      performOnething();
  if (numberOfPeople > 0) {
    performCalcs(10);
    Errors.style.display = "none";
    numOfP.style.borderColor = "";
  } else {
    Errors.style.display = "block";
    numOfP.style.borderColor = "red";
  }
};

numberFifteen.onclick = function () {
    const performOnething = ()=>{
        numberFifty.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifty.style.color = "white";
        numberFive.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFive.style.color = "white";
        numberTen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifteen.style.backgroundColor = "hsl(172, 67%, 45%)";
        numberFifteen.style.color = "hsl(183, 100%, 15%)";
        numberTen.style.color = "white";
        numberTwentiF.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberTwentiF.style.color = "white";

        Reset.style.backgroundColor = "hsl(183, 98%, 20%)";
    }
      performOnething();
  if (numberOfPeople > 0) {
    performCalcs(15);
    Errors.style.display = "none";
    numOfP.style.borderColor = "";
  } else {
    Errors.style.display = "block";
    numOfP.style.borderColor = "red";
  }
};

numberTwentiF.onclick = function () {
    const performOnething = ()=>{
        numberFifty.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifty.style.color = "white";
        numberFive.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFive.style.color = "white";
        numberTen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifteen.style.backgroundColor = "hsl(183, 100%, 15%)";
        numberFifteen.style.color = "white";
        numberTen.style.color = "white";
        numberTwentiF.style.backgroundColor = "hsl(172, 67%, 45%)";
        numberTwentiF.style.color = "hsl(183, 100%, 15%)";

        Reset.style.backgroundColor = "hsl(183, 98%, 20%)";
    }
      performOnething();
  if (numberOfPeople > 0) {
    performCalcs(25);
    Errors.style.display = "none";
    numOfP.style.borderColor = "";
  } else {
    Errors.style.display = "block";
    numOfP.style.borderColor = "red";
  }
};

numberFifty.onclick = function () {
  const performOnething = ()=>{
      numberFifty.style.backgroundColor = "hsl(172, 67%, 45%)";
      numberFifty.style.color = "hsl(183, 100%, 15%)";
      numberFive.style.backgroundColor = "hsl(183, 100%, 15%)";
      numberFive.style.color = "white";
      numberTen.style.backgroundColor = "hsl(183, 100%, 15%)";
      numberFifteen.style.backgroundColor = "hsl(183, 100%, 15%)";
      numberFifteen.style.color = "white";
      numberTen.style.color = "white";
      numberTwentiF.style.backgroundColor = "hsl(183, 100%, 15%)";
      numberTwentiF.style.color = "white";

      Reset.style.backgroundColor = "hsl(183, 98%, 20%)";
  }
    performOnething();
  if (numberOfPeople > 0) {
    performCalcs(50);
    Errors.style.display = "none";
    numOfP.style.borderColor = "";
  } else {
    Errors.style.display = "block";
    numOfP.style.borderColor = "red";
  }
};

setTimeout(() => {
  customNumber.oninput = function (e) {
    customNumber.style.borderColor = "hsl(172, 67%, 45%)";
    if (numberOfPeople > 0) {
      const customValue = parseFloat(e.target.value);
      performCalcs(customValue);
      Errors.style.display = "none";
      numOfP.style.borderColor = "";
    } else {
      Errors.style.display = "block";
      numOfP.style.borderColor = "red";
    }
  };
}, 4000);

billInput.oninput = function (e) {
  billInput.style.borderColor = "hsl(172, 67%, 45%)";
  billAmm = parseFloat(e.target.value);
};

numOfP.oninput = function (e) {
  numberOfPeople = parseFloat(e.target.value);
};

const performCalcs = (selectedTip) => {
  const tip = (selectedTip / 100) * billAmm;
  const tipAmm = tip / numberOfPeople;
  const totalTip = (selectedTip / 100 + 1) * billAmm;
  const totalAmm = totalTip / numberOfPeople;

  received_tip.textContent = tipAmm.toFixed(2);
  received_Totaltip.textContent = totalAmm.toFixed(2);
};

function Resetall(){
  received_Totaltip.textContent = "0.00";
  received_tip.textContent = "0.00";
}