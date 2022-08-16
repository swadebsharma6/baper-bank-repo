// step:01 add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('Deposit Button clicked')

    // step:2 get the deposit ammount deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount =parseFloat(newDepositAmountString);

   

    // step:03 get the current diposit total
        // for non input-field , text-area use to innerText get the text.

    const depositTotalElement = document.getElementById('diposit-total');
    const previousDepositTotalString =  depositTotalElement.innerText ;
    const previousDepositAmount = parseFloat(previousDepositTotalString);
    

    //step: 04 add number to set the total deposit
    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    // set deposit total
    depositTotalElement.innerText = currentDepositTotal ;

    //step:05 get balance current-Total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString );

    // step: 06 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



    // step:7 clear th edeposit field
    depositField.value = '';

})