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
const findBtn = document.querySelector('#find');
const criteria = document.querySelector('#criteria');
const deleteButtons = document.querySelectorAll('.delete-button');

let usersArr = [];

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

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            usersArr.splice(index, 1);
            updateUsersList();
        });
    });
}

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

findBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const findValue = document.querySelector('#findValue').value;
    const selectedCriteria = criteria.value;

    const filteredUsers = usersArr.filter(user => {
        if (selectedCriteria === 'cityCriteria') {
            return user.userCity.toLowerCase().includes(findValue.toLowerCase());
        } else if (selectedCriteria === 'nameCriteria') {
            return user.userName.toLowerCase().includes(findValue.toLowerCase());
        } else if (selectedCriteria === 'ageCriteria') {
            return user.userAge.toString().includes(findValue);
        }
    });

    lista.innerHTML = '';
    filteredUsers.forEach((user) =>{
        let li = document.createElement('li');
        li.classList.add('list-group-item');

        let span = document.createElement('span')
        span.innerHTML = `<strong>${user.userName}</strong> lat <strong>${user.userAge}</strong> z miasta <strong>${user.userCity}</strong>`;
        li.style.display = `flex`
        li.style.justifyContent = `space-between`
        li.append(span);
        lista.append(li);
    });
});

deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        usersArr.splice(index, 1);
        updateUsersList();
    });
});
