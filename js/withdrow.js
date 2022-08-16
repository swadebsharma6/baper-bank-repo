// step:01 add event listener to the deposit button

document.getElementById('btn-withdrow').addEventListener('click', function(){
    

    //step:02 get the amount from withdro input field.
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value ;
    const newWithdrowAmount = parseFloat (newWithdrowAmountString);
    // console.log(newWithdrowAmount);

    // step:03 get the withdrow ammount withdrow input field
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);

    // // step: 04 calculate total withdrow ammount.
    // const currentWithdrowTotal = newWithdrowAmount + previousWithdrowTotal;
    // withdrowTotalElement.innerText = currentWithdrowTotal;

    // step: 05 get the previous balance total
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step: 07 clear the withdrow field
    withdrowField.value = ''; 
    
    if(newWithdrowAmount > previousBalanceTotal){
        alert('You Have not enough money');
        return;
    }
    // step: 04 calculate total withdrow ammount.
    const currentWithdrowTotal = newWithdrowAmount + previousWithdrowTotal;
    withdrowTotalElement.innerText = currentWithdrowTotal;

    // step :06 calculate new balance total

    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    
})