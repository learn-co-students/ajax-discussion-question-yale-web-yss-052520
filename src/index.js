// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  
  
  let button = document.querySelector('button')  
  button.addEventListener('click', event => {

    let data = fetch('https://randomuser.me/api/')
                .then(res => res.json())
                .then(json => addDomInfo(json))
  
    function addDomInfo(full_person) {
      let new_person = full_person.results[0]
      let fullName = document.querySelector('h3#fullname')
      fullName.innerText = `${new_person.name['title']} ${$new_person.name['first']} ${new_person.name['last']}`
      let eMail = document.querySelector('h4#email')
      eMail.innerText = new_person.email 
      let street = document.querySelector('h4#street')
      street.innerText = `${new_person.location['street']['number']} ${new_person.location['street']['name']}` 
      let city = document.getElementById('city')
      city.innerText = new_person.location['city'] 
      let state = document.querySelector('h4#state')
      state.innerText = new_person.location['state']
      let postcode = document.getElementById('postcode')
      postcode.innerText = new_person.location['postcode']
      let phone = document.querySelector('h4#phone')
      phone.innerText = new_person.phone
      let cell = document.querySelector('h4#cell')
      cell.innerText = new_person.cell 
      let dob = document.getElementbyId('date_of_birth')
      dob.innerText = new_person.dob['date']
      
    }
  })
  
  console.log("CONTENT LOADED!");
});


