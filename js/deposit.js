document.getElementById("deposit-button").addEventListener("click",function(){
    const newDeposit = document.getElementById("input-deposit");
    const newDepositValue = newDeposit.value;

    const previousDeposit = document.getElementById("previous-deposit");
    const previousDepositTotal = previousDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositTotal) + parseFloat(newDepositValue);
    previousDeposit.innerText = previousDepositValue;
    newDeposit.value=" ";

    const PreviousBalance = document.getElementById("previous-balance");
    const previousBalanceTotal = PreviousBalance.innerText;
    const previousBalanceValue = parseFloat(previousBalanceTotal) + parseFloat(newDepositValue);
    PreviousBalance.innerText =previousBalanceValue;


})

document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInput = document.getElementById("input-withdraw");
    const withdrawInputValue = withdrawInput.value;
    
    const previousWithdraw = document.getElementById("previous-withdraw");
    const previousWithdrawValue = previousWithdraw.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawValue) + parseFloat(withdrawInputValue);
    previousWithdraw.innerText =newWithdrawTotal;
    withdrawInput.value ="";

    // update balance
    const PreviousBalance = document.getElementById("previous-balance");
    const previousBalanceTotal = PreviousBalance.innerText;
    const previousBalanceValue = parseFloat(previousBalanceTotal) - parseFloat(withdrawInputValue);
    PreviousBalance.innerText =previousBalanceValue;
})