// add money functionality
document.getElementById('add-money').addEventListener('click', function(e) {
    e.preventDefault();

    const bankSelect=document.getElementById('bank-select').value;
    const amountInput=document.getElementById('amount-to-add').value;
    const bankAcc =document.getElementById('bank-account-number').value;



    const availableBalanceElem = parseInt(document.getElementById('available-balance-amount').innerText);
    const newBalance = availableBalanceElem + parseInt(amountInput);
    document.getElementById('available-balance-amount').innerText = newBalance;
    setupCardClickHandlers('card', 'form');

    

});


// cash out functionality
document.getElementById('cash-out').addEventListener('click', function(e) {
    e.preventDefault();

    const agentNumber=document.getElementById('agent-number').value;
    const amountToCashOut=document.getElementById('amount-to-cashout').value; // Fixed: use the INPUT, not the label

    const availableBalanceElem  = parseInt(document.getElementById('available-balance-amount').innerText);
    const newBalance = availableBalanceElem - parseInt(amountToCashOut);
    document.getElementById('available-balance-amount').innerText = newBalance;

});


// pay bill functionality
document.getElementById('pay-now-btn-id').addEventListener('click', function(e) {
    e.preventDefault();
    
    const payedAmount=document.getElementById('amount-to-pay').value; // Fixed: use the INPUT, not the label


      const availableBalanceElem  = parseInt(document.getElementById('available-balance-amount').innerText);
    const newBalance = availableBalanceElem - parseInt(payedAmount);
    document.getElementById('available-balance-amount').innerText = newBalance;


    
});






// toggling feature 
function toggle(id){
    // STEP 1: Hide the Latest Payment section when any card is clicked
    const latestPaymentSection = document.getElementById('latest-payment-section');
    if(latestPaymentSection) {
        latestPaymentSection.style.display = 'none';
    }
    
    // STEP 2: Get all elements with class 'form' (returns a collection)
    const allForms = document.getElementsByClassName('form');
    
    // STEP 3: Loop through each form and hide it
    for(let form of allForms) {
        form.style.display = 'none';
    }
    
    // STEP 4: Show only the target form
    const targetForm = document.getElementById(id);
    if(targetForm) {  // Safety check: only if element exists
        targetForm.style.display = 'block';
    }
}

function makeActive(cardId) {
    // STEP 1: Get all elements with class 'card' (returns a collection)
    const allCards = document.getElementsByClassName('card');
   // STEP 2: Loop through each card and remove the 'active' class
   for(let card of allCards) {
       card.classList.remove('active');
   }
   // STEP 3: Add the 'active' class to the clicked card
   const activeCard = document.getElementById(cardId);
   if(activeCard) {  // Safety check: only if element exists
       activeCard.classList.add('active');
   }
}

//Add money card click
document.getElementById('add-money-id').addEventListener('click', function() {
    toggle('add-money');

});

//add money card click
document.getElementById('cash-out-id').addEventListener('click', function() {
    toggle('cash-out-form');
});

//transfer money card click
document.getElementById('transfer-id').addEventListener('click', function() {
    toggle('transfer-money');
});

//pay bill card click
document.getElementById('pay-bill-id').addEventListener('click', function() {
    toggle('pay-bill-form'); // Changed to use unique form ID
});