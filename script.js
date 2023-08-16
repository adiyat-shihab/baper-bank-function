// function for deposit value
function depoNdraw(depoNwith) {
  const mainValue = document.getElementById(depoNwith);
  const maintext = mainValue.innerText;
  const parseMain = parseFloat(maintext);
  return parseMain;
}
// function for balance
function bal(depoNwith) {
  const mainValue = document.getElementById(depoNwith);
  const maintext = mainValue.innerText;
  const parseMain = parseFloat(maintext);
  return parseMain;
}
function withInput(withIn) {
  const mainIn = document.getElementById(withIn);
  const mainInValue = mainIn.value;
  const mainInValueParse = parseFloat(mainInValue);
  mainIn.value = "";
  return mainInValueParse;
}
// function for replace new value
function forReplaceValue(existid, newval) {
  const rowid = document.getElementById(existid);
  rowid.innerText = newval;
  return newval;
}
document
  .getElementById("button-deposit")
  .addEventListener("click", function () {
    const within = withInput("input-amount");
    const withDepo = depoNdraw("deposit-value");
    const totalWithd = withDepo + within;
    const balval = depoNdraw("Balance-value");
    const totalbal = balval + within;
    const totalbalu = forReplaceValue("Balance-value", totalbal);
    const totalval = forReplaceValue("deposit-value", totalWithd);
  });
document
  .getElementById("Withdraw-button")
  .addEventListener("click", function () {
    const depoval = depoNdraw("Withdraw-much");
    const depolol = withInput("withinput");
    const balval = depoNdraw("Balance-value");
    if (depolol > balval) {
      alert("tor bap er bank e taka nai");
      return;
    } else if (depolol < 0) {
      return;
    } else {
      const totaldepo = depoval + depolol;
      const totaldelu = forReplaceValue("Withdraw-much", totaldepo);

      const totalbal = balval - depolol;
      const totalbalu = forReplaceValue("Balance-value", totalbal);
    }
  });
