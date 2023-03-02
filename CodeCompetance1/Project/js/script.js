const name = document.getElementById("name")
const email = document.getElementById("email")
const address = document.getElementById("address")
const phone = document.getElementById("phone")
const message = document.getElementById("message")

const form = document.getElementById("form")


form.addEventListener('submit', () => {
   if (name.value === '' || name.value == null) {
      alert("Name is required")
   } 
   else if (email.value === '' || email.value == null) {
      alert("Email is required")
   }
   else if (address.value === '' || address.value == null) {
      alert("Address is required")
   }
   else if (phone.value === '' || phone.value == null) {
      alert("Phone number is required")
   }
   else if (message.value === '' || message.value == null) {
      alert("Additional message is required")
   } else {
      alert(`Your data is ${name.value}, ${email.value}, ${address.value}, ${phone.value} \n
      Your message is: ${message.value}`)
   }
})