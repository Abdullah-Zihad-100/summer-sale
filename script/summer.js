
// set countor

const cardName=document.getElementById('card-names');
const count=cardName.childElementCount;

// card 1
document.getElementById('card-1').addEventListener('click',function(){
    // get card name
const selectCardName=document.getElementById('card-1-name');
const selectCardNameText=selectCardName.innerText;

// get card name 
const cardNames=document.getElementById('card-names');
// countor add
const count=cardNames.childElementCount;
// creat h3 
const h3=document.createElement('h3');
h3.innerHTML=`${count+1}.${selectCardNameText}`;
cardNames.appendChild(h3);
// card amount get 
const cardAmountElement=document.getElementById('card-1-amount');
const cardAmountString=cardAmountElement.innerText
const cardAmount=parseFloat(cardAmountString);
// total price get
const totalPriceText=document.getElementById('total-price');
const totalPriceString=totalPriceText.innerText;
const totalPrice=parseFloat(totalPriceString);


// add card amount + total price 
const addTotal=cardAmount+totalPrice;
totalPriceText.innerText=addTotal;
console.log(totalPriceText.innerText)

})


// card 2 ------------------




document.getElementById('card-2').addEventListener('click',function(){
    // get card name
const selectCardName=document.getElementById('card-2-name');
const selectCardNameText=selectCardName.innerText;



// get card name 
const cardNames=document.getElementById('card-names');
// countor add
const count=cardNames.childElementCount;
// creat h3 
const h3=document.createElement('h3');
h3.innerHTML=`${count+1}.${selectCardNameText}`;
cardNames.appendChild(h3);


// card amount get 
const cardAmountElement=document.getElementById('card-2-amount');
const cardAmountString=cardAmountElement.innerText
const cardAmount=parseFloat(cardAmountString);

// total price get

const totalPriceText=document.getElementById('total-price');
const totalPriceString=totalPriceText.innerText;
const totalPrice=parseFloat(totalPriceString);


// add card amount + total price 
const addTotal=cardAmount+totalPrice;
totalPriceText.innerText=addTotal;
console.log(totalPriceText.innerText)

})
// card 3 ------------------




document.getElementById('card-3').addEventListener('click',function(){
    // get card name
const selectCardName=document.getElementById('card-3-name');
const selectCardNameText=selectCardName.innerText;


// get card name 
const cardNames=document.getElementById('card-names');
// countor add
const count=cardNames.childElementCount;
// creat h3 
const h3=document.createElement('h3');
h3.innerHTML=`${count+1}.${selectCardNameText}`;
cardNames.appendChild(h3);


// card amount get 
const cardAmountElement=document.getElementById('card-3-amount');
const cardAmountString=cardAmountElement.innerText
const cardAmount=parseFloat(cardAmountString);

// total price get

const totalPriceText=document.getElementById('total-price');
const totalPriceString=totalPriceText.innerText;
const totalPrice=parseFloat(totalPriceString);


// add card amount + total price 
const addTotal=cardAmount+totalPrice;
totalPriceText.innerText=addTotal;
console.log(totalPriceText.innerText)

})




// card 4 ------------------




document.getElementById('card-4').addEventListener('click',function(){
    // get card name
const selectCardName=document.getElementById('card-4-name');
const selectCardNameText=selectCardName.innerText;


// get card name 
const cardNames=document.getElementById('card-names');
// countor add
const count=cardNames.childElementCount;
// creat h3 
const h3=document.createElement('h3');
h3.innerHTML=`${count+1}.${selectCardNameText}`;
cardNames.appendChild(h3);


// card amount get 
const cardAmountElement=document.getElementById('card-4-amount');
const cardAmountString=cardAmountElement.innerText
const cardAmount=parseFloat(cardAmountString);

// total price get

const totalPriceText=document.getElementById('total-price');
const totalPriceString=totalPriceText.innerText;
const totalPrice=parseFloat(totalPriceString);


// add card amount + total price 
const addTotal=cardAmount+totalPrice;
totalPriceText.innerText=addTotal;
console.log(totalPriceText.innerText)


})



// card 5 ------------------




document.getElementById('card-5').addEventListener('click',function(){
    // get card name
const selectCardName=document.getElementById('card-5-name');
const selectCardNameText=selectCardName.innerText;



// get card name 
const cardNames=document.getElementById('card-names');
// countor add
const count=cardNames.childElementCount;
// creat h3 
const h3=document.createElement('h3');
h3.innerHTML=`${count+1}.${selectCardNameText}`;
cardNames.appendChild(h3);


// card amount get 
const cardAmountElement=document.getElementById('card-5-amount');
const cardAmountString=cardAmountElement.innerText
const cardAmount=parseFloat(cardAmountString);

// total price get

const totalPriceText=document.getElementById('total-price');
const totalPriceString=totalPriceText.innerText;
const totalPrice=parseFloat(totalPriceString);


// add card amount + total price 
const addTotal=cardAmount+totalPrice;
totalPriceText.innerText=addTotal;
console.log(totalPriceText.innerText)

})



// card 6 ------------------




document.getElementById('card-6').addEventListener('click',function(){
    // get card name
const selectCardName=document.getElementById('card-6-name');
const selectCardNameText=selectCardName.innerText;



// get card name 
const cardNames=document.getElementById('card-names');
// countor add
const count=cardNames.childElementCount;
// creat h3 
const h3=document.createElement('h3');
h3.innerHTML=`${count+1}.${selectCardNameText}`;
cardNames.appendChild(h3);


// card amount get 
const cardAmountElement=document.getElementById('card-6-amount');
const cardAmountString=cardAmountElement.innerText
const cardAmount=parseFloat(cardAmountString);

// total price get

const totalPriceText=document.getElementById('total-price');
const totalPriceString=totalPriceText.innerText;
const totalPrice=parseFloat(totalPriceString);


// add card amount + total price 
const addTotal=cardAmount+totalPrice;
totalPriceText.innerText=addTotal;
console.log(totalPriceText.innerText);
})



document.getElementById('btn-off').addEventListener('click',function(){

        // get dis code to the field 
    const disCodeField=document.getElementById('off-code-field');
    const disCode=disCodeField.value;
if(disCode==='SELL200'){

      // get total price
    const totalPriceText=document.getElementById('total-price');
    const totalPrice=parseFloat(totalPriceText.innerText);

const disPrice=totalPrice*0.2;


// set condition 
if(200<totalPrice){

    const disAmountText=document.getElementById('dis-amount');
// const disAmount=parseFloat(disAmountText.innerText);

disAmountText.innerText=disPrice.toFixed(2);
// get total 
const totalAmount=document.getElementById('total');
const disAfterPrice = totalPrice - parseFloat(disAmountText.innerText);
totalAmount.innerText=disAfterPrice;
}
    }
    else{
        alert('worng code')
    }

})



//click go home reset all 
document.getElementById('go-home').addEventListener('click',function(){
  const totalAmount=document.getElementById('total');
  totalAmount.innerText='0';
   const totalPriceText=document.getElementById('total-price');
   totalPriceText.innerText='0';
   const disAmountText=document.getElementById('dis-amount');
disAmountText.innerText='0';
const cardNames=document.getElementById('card-names');
cardNames.innerHTML='';
    const disCodeField=document.getElementById('off-code-field');
    disCodeField.value='';

})

