const lista = document.querySelector('#lista');
const addBtn = document.querySelector('#add');
const findBtn = document.querySelector('#find');
const criteria = document.querySelector('#criteria');
const deleteButtons = document.querySelector('delete-button');

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

        let span = document.createElement('span')
        span.innerHTML = `<strong>${user.userName}</strong> lat <strong>${user.userAge}</strong> z miasta <strong>${user.userCity}</strong>`;
        let button = document.createElement('button');

        button.classList.add('btn');
        button.classList.add('btn-outline-danger');
        button.classList.add('delete-button')
        button.textContent = 'X'

        li.style.display = `flex`
        li.style.justifyContent = `space-between`
        li.append(span);
        li.append(button);
        lista.append(li);
    });
}

deleteButtons.addEventListener('click', (evt) => {
evt.preventDefault();
console.log('kocham fortnite')
})




const lista = document.querySelector('#lista');
const addBtn = document.querySelector('#add');
const usersArr = [];
const deleteButtons = document.querySelectorAll('.delete-button');

addBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const name = document.querySelector('#name').value;
    const city = document.querySelector('#city').value;
    const age = document.querySelector('#age').value;

    let user = {
        userID: generateID(),
        userName: name,
        userCity: city,
        userAge: age
    };

    usersArr.push(user);
    updateUsersList();
});

function updateUsersList() {
    lista.innerHTML = '';
    usersArr.forEach((user, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');

        let span = document.createElement('span')
        span.innerHTML = `<strong>${user.userName}</strong> lat <strong>${user.userAge}</strong> z miasta <strong>${user.userCity}</strong>`;
        let button = document.createElement('button');

        button.classList.add('btn');
        button.classList.add('btn-outline-danger');
        button.classList.add('delete-button');
        button.textContent = 'X';

        li.style.display = `flex`;
        li.style.justifyContent = `space-between`;
        li.append(span);
        li.append(button);
        lista.append(li);

        button.addEventListener('click', () => {
            usersArr.splice(index, 1);
            updateUsersList();
        });
    });
}

function generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
