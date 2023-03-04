
const form = document.getElementById('form');
const submit = document.getElementById('submit');
submit.disabled = true;

form.addEventListener('keyup', (e) => {
   const pname = document.getElementById('name');
   const category = document.getElementById('category');
   const image = document.getElementById('image');
   const message = document.getElementById('message');
   const price = document.getElementById('price');
   const regex = /^[a-zA-Z0-9 ]*$/;

   const errorName = document.getElementById('error-name');
   const errorCategory = document.getElementById('error-category');
   const errorImages = document.getElementById('error-images');
   const errorFreshness = document.getElementById('error-freshness');
   const errorDesc = document.getElementById('error-desc');
   const errorPrice = document.getElementById('error-price');


   errorName.style.display = "none";
   pname.style.border = "none";

   errorCategory.style.display = "none";
   category.style.border = "none";

   errorImages.style.display = "none";
   image.style.border = "none";

   errorDesc.style.display = "none";
   message.style.border = "none";

   errorPrice.style.display = "none";
   price.style.border = "none";

   errorFreshness.style.display = "none";


   if (pname.value === '' || pname.value == null ) {
      pname.style.border = "1px solid red";
      errorName.style.display = "block";
      e.preventDefault();
   } else if ((pname.value).length > 25){
      pname.style.border = "1px solid red";
      errorName.innerHTML = "Product Name must not exceed 25 characters";
      errorName.style.display = "block";
      e.preventDefault();
   } else if (!regex.test(pname.value)) {
      pname.style.border = "1px solid red";
      errorName.innerHTML = "Name must not contain symbols.";
      errorName.style.display = "block";
      e.preventDefault();
   } else if (category.value === '' || category.value == null){
      category.style.border = "1px solid red";
      errorCategory.style.display = "block";
      e.preventDefault();
   } else if (image.value === '' || image.value == null){
      image.style.border = "1px solid red";
      errorImages.style.display = "block";
      e.preventDefault();
   } else if (!checkButton()){
      errorFreshness.style.display = "block";
      e.preventDefault();
   } else if (message.value === '' || message.value == null){
      message.style.border = "1px solid red";
      errorDesc.style.display = "block";
      e.preventDefault();
   } else if (price.value === '' || price.value == null){
      price.style.border = "1px solid red";
      errorPrice.style.display = "block";
      e.preventDefault();
   }else {
      submit.disabled = false;
   }
})

function showAllData(){
   const pname = document.getElementById('name');
   const category = document.getElementById('category');
   const image = document.getElementById('image');
   const message = document.getElementById('message');
   const price = document.getElementById('price');
   
   const freshness = document.querySelector('input[name="freshness"]:checked').value;
   alert(`Product Name : ${pname.value} \n
   Category : ${category.value} \n
   Images: ${image.value} \n
   Freshness : ${freshness} \n
   Detail Product : ${message.value} \n
   Price : ${price.value}`)
}

function checkButton() {    
   if(document.getElementById('brandNew').checked) {   
      return true;
   }   
   else if(document.getElementById('secondHand').checked) {   
      return true;
   }   
   else if(document.getElementById('refurbished').checked) {   
      return true;
   } else {
      return false
   }
}   