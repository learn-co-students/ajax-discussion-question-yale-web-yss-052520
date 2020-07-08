const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const button = document.querySelector('button.btn-primary')
  button.addEventListener("click", addPerson)
});


function addPerson(){
        fetch('https://randomuser.me/api/')
        .then( res => res.json() )
        .then(json => {
          const name = document.querySelector('#fullname')
          const email = document.querySelector('#email')
          const street = document.querySelector('#street')
          const city = document.querySelector('#city')
          const state = document.querySelector('#state')
          const postcode = document.querySelector('#postcode')
          const phone = document.querySelector('#phone')
          const cell = document.querySelector('#cell')
          const dateOfBirth = document.querySelector('#date_of_birth')
          console.log(json)
          const result = json.results[0]
          name.innerText = `${result.name.title} ${result.name.first} ${result.name.last}`
          email.innerText = result.email
          street.innerText = `${result.location.street.number} ${result.location.street.name}`
          city.innerText = result.location.city
          state.innerText = result.location.state
          postcode.innerText = result.location.postcode
          phone.innerText = result.phone
          cell.innerText = result.cell
          dateOfBirth.innerText = result.dob.date
        })
        
}