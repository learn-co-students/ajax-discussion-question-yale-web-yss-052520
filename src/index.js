const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData(){
    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( function(json){

        let img = document.querySelector('img#profile_picture')
        img.src = json['results'][0]['picture']['thumbnail']

        let fullname = document.querySelector('h3#fullname')
        fullname.innerText = json['results'][0]['name']['title'] + ' ' + json['results'][0]['name']['first'] + ' ' + json['results'][0]['name']['last'] 

        let email = document.querySelector('h4#email')
        email.innerText = json['results'][0]['email']

        let street = document.querySelector('h4#street')
        street.innerText = json['results'][0]['location']['street']['number'] + ' '+ json['results'][0]['location']['street']['name']

        let city = document.querySelector('h4#city')
        city.innerText = json['results'][0]['location']['city']

        let state = document.querySelector('h4#state')
        state.innerText = json['results'][0]['location']['state']

        let postcode = document.querySelector('h4#postcode')
        postcode.innerText = json['results'][0]['location']['postcode']

        let phone = document.querySelector('h4#phone')
        phone.innerText = json['results'][0]['phone']

        let cell = document.querySelector('h4#cell')
        cell.innerText = json['results'][0]['cell']

        let dob = document.querySelector('h4#date_of_birth')
        dob.innerText = json['results'][0]['dob']['date']


      } )
  }

    let button = document.querySelector('button.btn-primary')
    button.addEventListener('click', function(){
      fetchData()
    })  
});