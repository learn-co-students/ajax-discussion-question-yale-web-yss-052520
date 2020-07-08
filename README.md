# Discussion Questions: AJAX

## Objectives

* Identify synchronous and asynchronous code
* Describe the process of communicating with the server
* Process data successfully returned from fetch()

## Exercise

### Question 1

Given the following code list the order of console.logs:

```javascript
console.log("Hello") // First

fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log("Hi") // Third
  })

console.log("Sup?") // Second
```

### Question 2

When fetchData is executed what will be console logged?

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( res => res )
        console.log(data)	
}

fetchData()

// Logs a promise storing the requested data from the api referenced in fetch

```

What will be console logged when the following code is run? Why?

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => console.log(json) )
}

fetchData()

// Logs the results stored in the promise returned by the fetch statement

```

What will be console logged when the following code is run? Why?

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( console.log )
}

fetchData()

// Logs the PromiseValue object. This is because the previous line implicitly passes it to console.log.

```

### Question 3

In your own words: what does asynchronous mean?

// When multiple threads of code are able to run at once, without waiting for previous actions to terminate

### Question 4

Write out the request and response cycle. What is its purpose? How does it work?

// The request and response cycle is the process by which data is brought to the client. First, the client makes a request to the server. The server then processes this response, compiles data, and sends that data to the user.

### Question 5

Check out the JSON you get from making a GET request to [this](https://randomuser.me/api/) url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.
