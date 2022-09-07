// Function for Get Value From Input 
const getInputFromField = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    return inputValue;
}
// Function For Set Items 
document.getElementById('send-name-btn').addEventListener('click', () => {
    const getName = getInputFromField('name-input');
    localStorage.setItem('Name', getName);
})
document.getElementById('send-email-btn').addEventListener('click', () => {
    const getName = getInputFromField('email-input');
    localStorage.setItem('Email', getName);
})
document.getElementById('send-text-btn').addEventListener('click', () => {
    const getName = getInputFromField('text-input');
    localStorage.setItem('Message', getName);
})
// Function For Delete Items 
document.getElementById('delete-name-btn').addEventListener('click', () => {
    localStorage.removeItem('Name');
})
document.getElementById('delete-email-btn').addEventListener('click', () => {
    localStorage.removeItem('Email');
})
document.getElementById('delete-text-btn').addEventListener('click', () => {
    localStorage.removeItem('Message');
})
// Function For Get Data From Local Storage 
const getDataFromLocalStorage = () => {
    const getData = localStorage.getItem('person');
    let person = {};
    if (getData) {
        person = JSON.parse(getData);
    }
    return person;
}   
// Function For Set All Elements Into Local Storage 
const saveDataIntoLocalStorage = (name,email,message) => {
    const person = getDataFromLocalStorage();
    person['name'] = name;
    person['email'] = email;
    person['message'] = message;
    const stringify = JSON.stringify(person);
    localStorage.setItem('person', stringify);
}
// Sent All Button Function 
document.getElementById('send-btn').addEventListener('click', () => {
    const name = getInputFromField('name-input');
    const email = getInputFromField('email-input');
    const message = getInputFromField('text-input');
    saveDataIntoLocalStorage(name, email, message);
    location.reload();
})
// Set Variables For Display Data 
const getObject = localStorage.getItem('person');
const convertParse = JSON.parse(getObject);
const getName = convertParse.name;
const getEmail = convertParse.email;
const getText = convertParse.message;
const display = document.getElementById('display-data');
display.innerHTML = `
    <p class="text-white mb-3">Name: <span class="text-amber-300 ml-4"> ${getName} </span> </p>
    <p class="text-white mb-3">Email: <span class="text-amber-300 ml-4"> ${getEmail} </span> </p>
    <p class="text-white">Text: <span class="text-amber-300 ml-4"> ${getText} </span> </p>
`;
// Set Button For Clear All Data 
document.getElementById('reset-btn').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})