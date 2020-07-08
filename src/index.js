const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector("button.btn-primary")
  const fullname = document.getElementById("fullname")
  const email = document.getElementById("email")
  const street = document.getElementById("street")
  const city = document.getElementById("city")
  const state = document.getElementById("state")
  const postcode = document.getElementById("postcode")
  const phone = document.getElementById("phone")
  const cell = document.getElementById("cell")
  const date_of_birth = document.getElementById("date_of_birth")

  function fetchData(){
    fetch('https://randomuser.me/api/')
    .then(function(res){
      return res.json()
      })
    .then(function(array){

      //time to append the datas
      const data = array["results"][0]
      console.log(data)

      fullname.innerText = data["name"]["title"] + " " + data["name"]["first"] + " " + data["name"]["last"]
      date_of_birth.innerText = data["dob"]["date"]
      
      email.innerText = data["email"]
      phone.innerText = data["phone"]
      cell.innerText = data["cell"]
      
      street.innerText = data["location"]["street"]["number"] + " " + data["location"]["street"]["name"]
      city.innerText = data["location"]["city"]
      state.innerText = data["location"]["state"]
    
    
      postcode.innerText = data["location"]["postcode"]
    
    })
  }

  // button.addEventListener("click", () => fetchData())
  button.addEventListener("click", fetchData)





});
