const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const btn = document.querySelector("button")
  btn.addEventListener('click', function(){
    fetch_student("https://randomuser.me/api/")
  })

});

function fetch_student(string) {
  return fetch(string).then(res => res.json()).then(res => output(res))
}

function output(obs) {
  const new_person = obs.results[0]
  console.log(new_person)
  const name = document.querySelector("#fullname")
  name.innerText = new_person.name.first + " " + new_person.name.last
  const email = document.querySelector("#email")
  email.innerText = new_person.email
  const phone = document.querySelector("#phone")
  phone.innerText = new_person.phone
  const cell = document.querySelector("#cell")
  cell.innerText = new_person.cell
  const date_of_birth = document.querySelector("#date_of_birth")
  date_of_birth.innerText = new_person.dob.date.slice(0, 10)  
  const street = document.querySelector("#street")
  street.innerText = new_person.location.street.name + " " + new_person.location.street.number
  const city = document.querySelector("#city")
  city.innerText = new_person.location.city
  const state = document.querySelector("#state")
  state.innerText = new_person.location.state
  const postcode = document.querySelector("#postcode")
  postcode.innerText = new_person.location.postcode
  const image = document.querySelector("#profile_picture")
  image.src = new_person.picture.medium
}

