"use strict";

const form = document.querySelector('form');
const userList = document.querySelector("#user-list")

if (!form) {
    console.error('Form not found');
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    let user = getFormData()
    addNewUserToLocalStorage(user)
    addNewUserToDOM(user)
    form.reset()
}


function getFormData() {
    const formData = new FormData(form);
    const user = {};
    formData.forEach((value, key) => {
        user[key] = value;
    });
    if (Object.keys(user).length === 0) {
        console.warn('No form data found');
    }
    return user
}

function addNewUserToLocalStorage(user) {
    let localStorageUserData = localStorage.getItem("UsersData")
    let newUser = localStorageUserData ? JSON.parse(localStorageUserData) : []
    newUser.push(user)
    localStorage.setItem("UsersData", JSON.stringify(newUser))
}

function addNewUserToDOM(user) {
    const userElement = document.createElement("li")
    userElement.innerText = `${user['first name']} ${user['last name']}`
    userList.appendChild(userElement)
}