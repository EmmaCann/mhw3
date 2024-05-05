
/*MENU MOBILE*/
const hamburger_icon=document.querySelector('.menu-icon');
const hamburger_menu=document.querySelector('.hamburger-menu');
const mobile_icons = document.getElementById('mobile-icons');
const heart_icon = document.getElementById('heart');

hamburger_icon.addEventListener("click",function() {
    hamburger_icon.classList.toggle("active");
    hamburger_menu.classList.toggle("active");
    document.getElementById('mobile-icons').style.display='none';
    document.getElementById('heart').style.display='none';

    if (hamburger_icon.classList.contains("active")) {
        mobile_icons.style.display = 'none';
        heart_icon.style.display = 'none';
    } else {
        mobile_icons.style.display = 'flex';
        heart_icon.style.display = 'block';
    }
 })



 /*PANNELLO A SCOMPARSA PASSAGGIO MOUSE SU NAVBAR*/



const items = document.querySelectorAll('.bottom_nav-links li');
const panels = document.querySelectorAll('.pannello-a-scomparsa');


items.forEach(item => {
    item.addEventListener('mouseover', function() {
       
        closeAllPanels();

        
        const panelId = this.dataset.panelId;
        const panelToOpen = document.querySelector(`#${panelId}`);
        panelToOpen.classList.add('open');
    });
});


panels.forEach(panel => {
    panel.addEventListener('mouseleave', function() {
        this.classList.remove('open');
    });
});

function closeAllPanels() {
    panels.forEach(panel => {
        panel.classList.remove('open');
    });
}



/*FAVOURITES ICONS - SHOES   /    FAVOURITE ICON NAVBAR*/

 const favourite_icon= document.querySelectorAll('#favourite-icon');
 let likedItems=0;
 
 favourite_icon.forEach(image => {
    image.addEventListener('click',function(event){
        event.preventDefault();
        const isLiked=this.dataset.liked==='true';
       if(!isLiked)
        {
             this.src='icons/black-heart.png';
             this.dataset.liked='true';
             likedItems++;
        }
        else{
            this.src='icons/heart.png';
            this.dataset.liked='false';
            likedItems--;
        }
       updateCounter();
    })
    
 })

 function updateCounter(){
    let counterBox=document.getElementById('counter-box');
    if(!counterBox)
    {
        const newCounterBox=document.createElement('div');
        newCounterBox.id='counter-box';
        newCounterBox.className='counter-Box';
        document.querySelector('#bottom_desktop-nav .nav-icons').appendChild(newCounterBox);
        newCounterBox.textContent= likedItems +  "   ELEMENTI PIACIUTI";
        
    }
    else{
        counterBox.textContent= likedItems + "   ELEMENTI PIACIUTI" ;
    }
 }

const navFav=document.getElementById('nav-favourite');
navFav.addEventListener('mouseenter',function(){
    updateCounter();
    const counterBox=document.getElementById('counter-box');
    if(counterBox)
    {
        counterBox.style.display='block';
    }
})
navFav.addEventListener('mouseleave',function(){
    const counterBox=document.getElementById('counter-box');
    if(counterBox)
    {
        counterBox.style.display='none';
    }
})
 


 /*VIDEO PLAYER*/
 const video=document.querySelector("#video-container video");
 const button=document.querySelector("#play-icon img");
 let isPlaying=false;

 button.addEventListener('click',function(event){
    event.preventDefault();
    if(!isPlaying)
    {
        video.play();
        button.src='icons/pause-button.png';
    }
    else{
        video.pause();
        button.src='icons/white-play-button.png';
    }
    isPlaying=!isPlaying;
 })


/*ACCEDI / REGISTRATI*/


const profileIcon = document.querySelector('#user');
const mobileUser= document.querySelector('#user-mobile');
const mobileProfile=document.querySelector('#mobile-profilo');
const accediLink = document.getElementById('accedi');
const memberLogin = document.querySelector('#login .member');
const memberRegister = document.querySelector('#register .member');
const login_bg = document.querySelector('#login');
const register_bg = document.querySelector('#register');
const regExit=document.querySelector('#register #exit-icon');
const logExit=document.querySelector('#login #exit-icon');


function addBodyNoScroll() {
    document.body.classList.add('no-scroll');
}
function removeBodyNoScroll() {
    document.body.classList.remove('no-scroll');
}


profileIcon.addEventListener('click', function(event) {

    event.preventDefault();
    login_bg.classList.add('show');
    addBodyNoScroll();

});
mobileUser.addEventListener('click', function(event) {

    event.preventDefault();
    login_bg.classList.add('show');
    addBodyNoScroll();

});
mobileProfile.addEventListener('click', function(event) {

    event.preventDefault();
    login_bg.classList.add('show');
    addBodyNoScroll();

});




accediLink.addEventListener('click', function(event) {

    event.preventDefault();
    login_bg.classList.add('show');
    addBodyNoScroll();

});


memberLogin.addEventListener('click', function(event) {

   event.preventDefault(); 
   login_bg.classList.remove('show');
   register_bg.classList.add('show');
   addBodyNoScroll();
});


memberRegister.addEventListener('click', function(event) {

    event.preventDefault();
    login_bg.classList.add('show');
    register_bg.classList.remove('show');
    addBodyNoScroll();

});


login_bg.addEventListener('click', function(event) {

    if (!event.target.closest('.outside-box')) {
        login_bg.classList.remove('show');
        removeBodyNoScroll();
    }

});


register_bg.addEventListener('click', function(event) {

    if (!event.target.closest('.outside-box')) {

        register_bg.classList.remove('show');
        removeBodyNoScroll();
    }

});

logExit.addEventListener('click',function(event){
    event.preventDefault();
    login_bg.classList.remove('show');
    removeBodyNoScroll();
})
regExit.addEventListener('click',function(event){
    event.preventDefault();
    register_bg.classList.remove('show');
    removeBodyNoScroll();
})





 /*COUNTER CARRELLO*/
 const buy_icon= document.querySelectorAll('#to-buy-icon');

 let boughtItems=0;
 
 
 buy_icon.forEach(image => {
    image.addEventListener('click',function(event){
        event.preventDefault();
        const isBought=this.dataset.buy==='true';
       if(!isBought)
        {
             this.dataset.buy='true';
             boughtItems++;
        }
       updateCartCounter(boughtItems);
       this.dataset.buy='false'; 
    })
    
 })
const exit=document.getElementById('exit');
const cartMobile=document.querySelector('#cart-mobile');
 function updateCartCounter(boughtItems){

    if(boughtItems !=0)
    {   
        let quantity=document.querySelector(' .quantity');
        let mobileCounter=document.querySelector('#mobile-icons .quantity');
        quantity.textContent=boughtItems;
        mobileCounter.textContent=boughtItems;
        cart.addEventListener('click',function(event){
            event.preventDefault();
            cart_panel.classList.add('appear');

        })
        exit.addEventListener('click',function(){
            cart_panel.classList.remove('appear');
        })
    }

    
   
 }
 cartMobile.addEventListener('click',function(event){
    event.preventDefault();
    cart_panel.classList.add('appear');
    addBodyNoScroll();
})
exit.addEventListener('click',function(){
    cart_panel.classList.remove('appear');
    removeBodyNoScroll();
})


/*FINESTRA CARRELLO */
const cart=document.querySelector('.nav-icons #shopping-bag');
const cart_panel=document.querySelector('#cart .side-box');


   const NoElementsPanel=document.createElement('div');
    NoElementsPanel.id='noElements-box';
    NoElementsPanel.className='noElements-Box';
    document.querySelector('#bottom_desktop-nav .nav-icons').appendChild(NoElementsPanel);
    NoElementsPanel.textContent=  " IL TUO CARRELLO E' VUOTO";
   
    cart.addEventListener("click",function(event){
        event.preventDefault();
        if(boughtItems==0)
        {
            NoElementsPanel.style.display='flex';
        }
            
    })

    NoElementsPanel.addEventListener('mouseleave',function(){
        NoElementsPanel.style.display='none';
    })

   
/*funzionamento carrello*/


const addToCartButtons=document.querySelectorAll('[data-buy="false"]');
const cartItemsContainer=document.getElementById('items-list');
const totalValueSpan=document.querySelector('#total-value');

let cartTotal=0;

function updateTotalValue(){
    let total = 0;
    const cartItems = cartItemsContainer.querySelectorAll('.item');

    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('€', ''));
        let quantity = item.querySelector('.item-quantity').value;
        total =total +(price*quantity);

    });

    totalValueSpan.textContent = '€' + total.toFixed(2);
    cartTotal = total; 

}

function addToCartHandler(event){
    event.preventDefault();

    const productContainer=event.target.closest('.product-container');
    const productName=productContainer.querySelector('.shoe-desc #nome').textContent;
    const productPrice=parseFloat(productContainer.querySelector('.price-tag span').textContent);

    const existingCartItem = Array.from(cartItemsContainer.querySelectorAll('.item')).find(item => {
        return item.querySelector('.item-name').textContent === productName;
    });

    if (existingCartItem) {
        
        const quantityInput = existingCartItem.querySelector('.item-quantity');
        quantityInput.value = parseInt(quantityInput.value) + 1;
    } else {

    const cartItemHTML= `
    <div class="item">
         <img class="item-img" src="${productContainer.querySelector('#shoe').src}" alt="shoe" >
        <span class="item-name">${productName}</span>
        <span class="item-price">${productPrice.toFixed(2)}</span>
        <input class="item-quantity" type="number" value="1">
        <img class="remove-item medium-icon" src="icons/delete.png" alt="delete icon">
    </div>
    `;

    cartItemsContainer.insertAdjacentHTML('beforeend',cartItemHTML);
    }
    cartTotal += productPrice;
    updateTotalValue();
}

addToCartButtons.forEach(button => {
    button.addEventListener('click',addToCartHandler);
});



cartItemsContainer.addEventListener('change', function(event) {
    const target = event.target;
    if (target.classList.contains('item-quantity')) {
        let quantity = parseInt(target.value);
        if (isNaN(quantity) || quantity <= 0) {
            quantity = 1;
            target.value = quantity;
        }
        const price = parseFloat(target.parentElement.querySelector('.item-price').textContent.replace('€', ''));
        const totalPrice = price * quantity;
        price.textContent= '€' + totalPrice.toFixed(2);
        updateTotalValue();
    }
});

cartItemsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
        const itemToDelete = event.target.parentElement.remove();
        updateTotalValue();
        boughtItems--;
        updateCartCounter(boughtItems);
    }
});


// converter

const converterButton=document.querySelector('#converter');
const currencyBox=document.querySelector('#currency-box');
const exitIcon=document.querySelector('#currency-box #exit-icon');

converterButton.addEventListener('click',function(event){
    event.preventDefault();
    currencyBox.style.display='flex';
})
exitIcon.addEventListener('click',function(event){
    event.preventDefault();
    currencyBox.style.display='none';
})



const dropList=document.querySelectorAll('.drop-list select');
const getButton=document.querySelector('.converterButton');
const fromCurrency=document.querySelector('.from select');
const toCurrency=document.querySelector('.to select');

for(let i=0;i<dropList.length;i++){
    for(currency_code in country_code){
        let optionTag=`<option value="${currency_code}">${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend",optionTag);
    }
   
}

getButton.addEventListener("click",function(event){
    event.preventDefault();
    getExchangeRate();
})

const exchangeIcon=document.querySelector('.exchange-icon');
exchangeIcon.addEventListener("click",function(){
    let tempCode=fromCurrency.value;
    fromCurrency.value=toCurrency.value;
    toCurrency.value=tempCode;
})

function getExchangeRate(){
    const amount=document.querySelector(".amount input"); 
    let  exchangeRateTxt=document.querySelector('.exchange-rate');
    let amountVal=amount.value;
    if(amountVal==""||amountVal=="0"){
        amount.value="1";
        amountVal=1;
    }
    let url=`https://v6.exchangerate-api.com/v6/d32f6b4385fc1d7d72a68488/latest/${fromCurrency.value}`;
    fetch(url).then(response =>response.json()).then(result =>{
       let exchangeRate=result.conversion_rates[toCurrency.value];
       let totalExchangeRate=(amountVal*exchangeRate).toFixed(2);
       exchangeRateTxt.innerText=`${amountVal} ${fromCurrency.value}=${totalExchangeRate} ${toCurrency.value}`;
    })
}






// API -checkout

const client_id = "AWCSRd8QFsVlzF0H7_z0LqKRexkmqj1-RyVXo1C-QI4MdUhFZBd1R_xiOXJKwwn_O5f90TbuNTfKilJS";
const client_secret = "EInbjEUt7kyDfLUG_a8lK726JK6VQL4uxtwtgY3H4uUHC-QeuN7vrRGPa9a4v26nm5Rma_lmM3DqM7aA";
const environment = 'sandbox';
const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';

const generateAccessToken = async () => {
    try {
        const response = await fetch(`${endpoint_url}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                "Authorization": `Basic ${btoa(client_id + ":" + client_secret)}`
            },
        });
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};

const createOrder = async () => {
    try {
        const accessToken = await generateAccessToken();
        const url = `${endpoint_url}/v2/checkout/orders`;
        const payload = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "EUR",
                        value: cartTotal,
                    },
                },
            ],
        };

        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            method: "POST",
            body: JSON.stringify(payload),
        });

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        window.location.href = `https://www.sandbox.paypal.com/checkoutnow?token=${jsonResponse.id}`;
    } catch (error) {
        console.error("Failed to create order:", error);
    }
};



    
const payButton=document.querySelector('#payment-btn');
payButton.addEventListener('click',createOrder);


/* 
    email di prova pragamento: sb-o8wuj29937643@personal.example.com
    password di prova pagamento: K1:8B6!w

    oppure procedere senza account
    */






  



    