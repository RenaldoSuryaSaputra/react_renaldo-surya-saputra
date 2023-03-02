
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
   const pname = document.getElementById('name').value
   const category = document.getElementById('category').value
   const image = document.getElementById('image').value
   const message = document.getElementById('message').value
   const price = document.getElementById('price').value

   const regex = /^[a-zA-Z0-9 ]*$/;

   if (pname === '' || pname == null) {
      alert("The Product Name field must be filled in")
      e.preventDefault();
   } else if (category === '' || category == null){
      alert("The Product Category field must be filled in")
      e.preventDefault();
   } else if (image === '' || image == null){
      alert("The Images field must be filled in")
      e.preventDefault();
   } else if (message === '' || message == null){
      alert("The Additional Description field must be filled in")
      e.preventDefault();
   } else if (price === '' || price == null){
      alert("The Product Price field must be filled in")
      e.preventDefault();
   } else if (!checkButton()){
      alert("The Brand Freshness field must be filled in")
      e.preventDefault();
   }else {
      if (pname.length > 25) {
         alert("Product Name must not exceed 25 characters")
         e.preventDefault();
      } else if (!regex.test(pname)) {
         alert("Name must not contain symbols.")
         e.preventDefault();
      } else {
         alert("successfully submitted")
   }
}
})

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