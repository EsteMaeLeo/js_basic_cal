function add() {
  const form = document.getElementById("operator");
  let operatorA = form["operatorA"];

  let operatorB = form["operatorB"];
  let result = parseInt(operatorA.value) + parseInt(operatorB.value);
  console.log(result);
  if (isNaN(result)) {
    document.getElementById("result").innerHTML =
      "Please provide both operators";
  } else {
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  }
}

function rest() {
  const form = document.getElementById("operator");
  let operatorA = form["operatorA"];
  let operatorB = form["operatorB"];
  let result = parseInt(operatorA.value) - parseInt(operatorB.value);
  console.log(result);
  if (isNaN(result)) {
    document.getElementById("result").innerHTML =
      "Please provide both operators";
  } else {
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  }
}

function multi() {
  const form = document.getElementById("operator");
  let operatorA = form["operatorA"];
  let operatorB = form["operatorB"];
  let result = parseInt(operatorA.value) * parseInt(operatorB.value);

  if (isNaN(result)) {
    document.getElementById("result").innerHTML =
      "Please provide both operators";
  } else {
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  }
}

function divsion() {
  const form = document.getElementById("operator");
  let operatorA = form["operatorA"];
  let operatorB = form["operatorB"];
  if (parseInt(operatorB.value) != 0) {
    let result = parseInt(operatorA.value) / parseInt(operatorB.value);

    if (isNaN(result)) {
      document.getElementById("result").innerHTML =
        "Please provide both operators";
    } else {
      document.getElementById("result").innerHTML = `Resultado: ${result}`;
    }
  } else {
    document.getElementById("result").innerHTML =
      "Division by zero no possible";
  }
}
