const lista = document.querySelector('#lista');
const addBtn = document.querySelector('#add');
const findBtn = document.querySelector('#find');
const criteria = document.querySelector('#criteria');
const findValueInput = document.querySelector('#findValue');
const filterList = document.querySelector('#filterList');

updateUsersList();

addBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const name = document.querySelector('#name').value;
    const city = document.querySelector('#city').value;
    const age = document.querySelector('#age').value;

    let user = {
        userID: crypto.randomUUID(),
        userName: name,
        userCity: city,
        userAge: age
    };

    usersArr.unshift(user);
    updateUsersList();
});


function updateUsersList(arr = usersArr) {
    lista.innerHTML = '';
    arr.forEach((user) =>{
        let li = document.createElement('li');
        li.classList.add('list-group-item');

        let span = document.createElement('span')
        span.innerHTML = `<strong>${user.userName}</strong> lat <strong>${user.userAge}</strong> z miasta <strong>${user.userCity}</strong>`;

        let button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('btn-outline-danger');
        button.textContent = 'X'
        button.addEventListener('click', () =>{
            removeUser(user.userID);
        })

        li.style.display = `flex`
        li.style.justifyContent = `space-between`
        li.append(span);
        li.append(button);
        lista.append(li);
    });
}

function removeUser(removeByID){
    usersArr = usersArr.filter((user) => user.userID !== removeByID);
    updateUsersList();
};

function criteriaSelect(keys) {
    criteria.innerHTML = '';
    keys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        criteria.appendChild(option);
    });
}

function filteredList(arr = usersArr){
    const findVal = criteria.value;
    const findText = findValueInput.value.trim().toLowerCase();
    const filteredUsers = arr.filter(user => user[findVal].toLowerCase().includes(findText));
    updateFilteredList(filteredUsers);
}

function updateFilteredList(arr) {
    filterList.innerHTML = '';
    arr.forEach((user) =>{
        let li = document.createElement('li');
        li.classList.add('list-group-item');

        let span = document.createElement('span')
        span.innerHTML = `<strong>${user.userName}</strong> lat <strong>${user.userAge}</strong> z miasta <strong>${user.userCity}</strong>`;
        
        li.style.display = `flex`
        li.style.justifyContent = `space-between`
        li.append(span);
        filterList.append(li);
    });
}

criteriaSelect(Object.keys(usersArr[0]));

findBtn.addEventListener('click', (evt) =>{
    evt.preventDefault();
    filteredList();
});




function criteriaSelect(usersArr) {
    criteria.innerHTML = '';
    for (let key in usersArr[0]) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        criteria.appendChild(option);
    }
}

criteriaSelect(usersArr);


function filteredList(arr = usersArr){
    const findVal = criteria.value;
    const findText = findValueInput.value.trim().toLowerCase();
    const filteredUsers = arr.filter(user => {
        const value = user[findVal];
        if (typeof value === 'string') {
            return value.toLowerCase().includes(findText);
        } else {
            return false; // Nie filtruj, jeśli nie jest to string
        }
    });
    updateFilteredList(filteredUsers);
}
