const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let button_tag = document.getElementsByClassName("btn btn-primary")[0]

  button_tag.addEventListener('click', event =>{
    fetch_data();
  });

  function fetch_data(){
    fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(json => load_data(json.results[0]));
  }

  function load_data(json){
    let pic_url = json["picture"]["medium"];
    document.getElementById("profile_picture").src = pic_url;

    let name = json.name
    let full_name = `${name.title} ${name.first} ${name.last}`;
    document.getElementById("fullname").innerText = full_name;

    let email = json["email"];
    document.getElementById("email").innerText = email;

    loc = json.location

    let street = `${loc.street.number} ${loc.street.name}`;
    document.getElementById("street").innerText = street;

    let city = loc["city"];
    document.getElementById("city").innerText = city;

    let state = loc["state"];
    document.getElementById("state").innerText = state;

    let zipcode = loc["postcode"];
    document.getElementById("postcode").innerText = zipcode;

    let phone = json["phone"];
    document.getElementById("phone").innerText = phone;

    let cell = json["cell"];
    document.getElementById("cell").innerText = cell;

    let dob = json["dob"]["date"].match(/\d{4}-\d{2}-\d{2}/);
    document.getElementById("date_of_birth").innerText = dob;
  }

}); 
