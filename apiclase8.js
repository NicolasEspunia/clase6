

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if(this.readyState === 4 && this.status === 200){
//         //0=unset
//         //1 = opened
//         //2=header received
//         //3 =lodaing
//         //4=done
//         const data = JSON.parse(this.response);
//         const HTMLResponse = document.querySelector("#app");

//         const tpl = data.map(user => `<li>${user.name}  ,${user.email}</li>`)
//     HTMLResponse.innerHTML =`<ul>${tpl}</ul>`;
//     }

// }
// xhr.addEventListener("load",onRequestHandler);
// xhr.open('GET',`${API_URL}/users`);
// xhr.send();

//  API DE FETCH


const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(` ${API_URL}/users`)
.then((response)=>response.json())
.then((users)=>{
    users.forEach((user)=>{
        let elem = document.createElement("li");
        elem.appendChild(
            document.createTextNode(`${user.name} ${user.email}`)
        );
        ul.appendChild(elem);
    });
    HTMLResponse.appendChild(ul);
})