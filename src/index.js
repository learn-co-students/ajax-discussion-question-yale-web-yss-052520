const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData(){
    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( json => addPerson(json) )
  }
  
  function addPerson(json){
    let person = json['results'][0]
    
    let img = document.querySelector('img#profile_picture')
    img.src = person['picture']['thumbnail']

    let fullname = document.querySelector('h3#fullname')
    fullname.innerText = person['name']['title'] + ' ' + person['name']['first'] + ' ' + person['name']['last'] 

    let email = document.querySelector('h4#email')
    email.innerText = person['email']

    let street = document.querySelector('h4#street')
    street.innerText = person['location']['street']['number'] + ' '+ person['location']['street']['name']

    let city = document.querySelector('h4#city')
    city.innerText = person['location']['city']

    let state = document.querySelector('h4#state')
    state.innerText = person['location']['state']

    let postcode = document.querySelector('h4#postcode')
    postcode.innerText = person['location']['postcode']

    let phone = document.querySelector('h4#phone')
    phone.innerText = person['phone']

    let cell = document.querySelector('h4#cell')
    cell.innerText = person['cell']

    let dob = document.querySelector('h4#date_of_birth')
    dob.innerText = person['dob']['date']

  }

  let btn = document.querySelector('button.btn-primary')
  btn.addEventListener('click', function(){
    let data = fetchData()
  })
});