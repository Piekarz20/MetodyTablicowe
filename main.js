import usersArr from './users.js';
const lista = document.querySelector('#lista');
const addBtn = document.querySelector('#add');


usersArr.forEach((user) =>{
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `${user.userName} lat ${user.userAge} z miasta ${user.userCity}`;
    lista.append(li);
});

addBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const name = document.querySelector('#name').value;
    const city = document.querySelector('#city').value;
    const age = document.querySelector('#age').value;

    let user = {
        userID: '',
        userName: name,
        userCity: city,
        userAge: age
    };

    usersArr.push(user);
    updateUsersList();
});


function updateUsersList() {
    lista.innerHTML = '';
    usersArr.forEach((user) =>{
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${user.userName} lat ${user.userAge} z miasta ${user.userCity}`;
        lista.append(li);
    });
}