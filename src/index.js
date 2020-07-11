const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function fetchData(){
  return fetch('https://randomuser.me/api/')
    .then( res => {return res.json()} )
};


let btn = document.getElementsByClassName("btn btn-primary");

btn[0].addEventListener("click", adder());
 
function adder(){
  console.log("i was called")

  let dat = fetchData().then((data) => {
    console.log(data)
    const img = document.querySelector('img#profile_picture')
    img.src = data['results'][0]['picture']['thumbnail']
    console.log(img.src)
  })
}

