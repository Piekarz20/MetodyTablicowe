const lista = document.querySelector('#lista');
const addBtn = document.querySelector('#add');

let usersArr = [
    {
        userID: '',
        userName: 'Bartek',
        userCity: "Zabrze",
        userAge: 25
    },
    {
        userID: '',
        userName: 'Adrian',
        userCity: "Gliwice",
        userAge: 26
    },
    {
        userID: '',
        userName: "Marek",
        userCity: "Zielona Góra",
        userAge: 45
    },
    {
        userID: '',
        userName: "Ania",
        userCity: "Żywiec",
        userAge: 36
    },
    {
        userID: '',
        userName: "Basia",
        userCity: "Toruń",
        userAge: 72
    },
]

usersArr.forEach((user) =>{
    let li = document.createElement('li')
        li.classList.add('list-group-item');

        li.textContent = `${user.userName} lat ${user.userAge} z miasta ${user.userCity}`;
        lista.append(li);
})

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
    }
    
    usersArr.push(user);
})