let fetchBtn = document.getElementById("fetchBtn");
let backupBtn = document.getElementById("backupBtn");
let popBtn = document.getElementById("popBtn");

fetchBtn.addEventListener("click", buttonClickHandler);
backupBtn.addEventListener("click", postButtonHandler);
popBtn.addEventListener("click", popButtonHandler);

function buttonClickHandler() {
  console.log("You clicked the button");
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); //true means async

  // what to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  //if we have to do something on state change (optional)
  xhr.onreadystatechange = function () {
    console.log("ready state is ", xhr.readyState);
    /*
     0 -> unsent i.e open method is not yet initialized
     1 -> opened i.e request is initialized
     2 -> headers are received as send() is invoked
     3 -> request is still in process
     4 -> completion of request
    */
  };

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      console.log(this);
    } else {
      console.log("some error");
    }
    // 200 - OK, 201 - created
    // 400- bad request, 401- unauthorized, 403 - forbidden, 404- not found
    //502 - bad gateway, 504 - gateway timeout
  };

  //send the request
  xhr.send();
}

function postButtonHandler() {
  console.log("You clicked the button");
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object
  xhr.open("POST", "https://dummyjson.com/products/add", true); //true means async

  //Tells content type of data sending in POST request
  // xhr.getResponseHeader("content-type", "application/x-www-form-urlencoded"); // for url encoded
  xhr.getResponseHeader("content-type", "application/json"); //for json type

  // what to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  //if we have to do something on state change (optional)
  xhr.onreadystatechange = function () {
    console.log("ready state is ", xhr.readyState);
  };

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      console.log(this);
    } else {
      console.log("some error");
    }
  };

  params = "title=BMW&owner=Pencil&age=23"; //if we are using url encoded
  //send the request
  xhr.send(params);
}

function popButtonHandler() {
  console.log("Pop button is clicked");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.slingacademy.com/v1/sample-data/files/employees.json",
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj.employees);
      let list = document.getElementById("list");
      let str = "";
      // for (emp in obj.employees) {
      //   console.log(emp);
      //   str += emp.last_name;
      //   list.append(`<li>${str}</li>`);
      //   str = "";
      // }
      for (let i = 0; i < 10; i++) {
        str += `<li>${obj.employees[i].last_name}</li>`;
        list.innerHTML = str;
      }
    } else {
      console.log("There is error");
    }
  };
  xhr.send();
}

//////////////// Fetch API ////////////////

let p = fetch(
  "https://api.slingacademy.com/v1/sample-data/files/employees.json"
)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
// it is a 2-stage process in first then we get response status and in other we get data

let options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
};
fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
/////// using async await /////
const task = async () => {
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: "chal hatt",
      body: "sdcs",
      userId: 3,
    }),
  };
  let todo = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let res = await todo.json();
  return res;
};

const mainFunc = async () => {
  const examp = await task();
  console.log(examp);
};
mainFunc();
