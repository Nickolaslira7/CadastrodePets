class Pet{
    constructor(tutor, namePet, specie, photograph, Birthday){
        this.tutor = tutor;
        this.namePet = namePet;
        this.specie = specie;
        this.photograph = photograph;
        this.Birthday = Birthday;
        this.id = this.ContId();
        this.age = this.calculateAge();

        
    }
    ContId() {
        let id = 1;
        id++
        return id
    }
    calculateAge() {
        const birthdate = new Date(this.Birthday);
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - birthdate;
        const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
        return Math.floor(ageInYears);
    }
}


function composePet() {
    let tutor = document.getElementById("tutorInput").value
    let namePet = document.getElementById("namePet-Input").value
    let specie = document.getElementById("species-Input").value
    let photograph = document.getElementById("Photograph-Input").value
    let Birthday = document.getElementById("Birthday-Input").value

    const originalDate = Birthday;
const dateComponents = originalDate.split("-");
const invertedDate = `${dateComponents[2]}/${dateComponents[1]}/${dateComponents[0]}`;


    const NewPet = new Pet(tutor, namePet, specie, photograph, invertedDate, pet.ContId());
    petList.Add(NewPet);
}

class PetList{
    constructor(){
        this.petArrey = [];
    }
    Add(parameter){
        this.petArrey.push(parameter);
    }
    remove(id) {
        const index = this.petArrey.findIndex(pet => pet.id === id);
        if (index !== 1) {
            this.petArrey.splice(index, 1);
        }
    }
}

const petList = new PetList();

function RegisterPet() {
     isAnyInputEmpty();
    isURLValid();
    if (!isAnyInputEmpty() && isURLValid()) {
        composePet();
        InputsClund();
        
    }
    listHTML();
}

function isAnyInputEmpty() {
    let tutor = document.getElementById("tutorInput").value
    let namePet = document.getElementById("namePet-Input").value
    let specie = document.getElementById("species-Input").value
    let photograph = document.getElementById("Photograph-Input").value
    let Birthday = document.getElementById("Birthday-Input").value

    if (tutor == "" || namePet == "" || specie == "" || photograph == "" || Birthday == "") {
        sendMsg("Preencha todos os campos!", "error")
        return true
    } else {
        sendMsg("Cadastrado com sucesso", "correct")
        return false
    }
}

function sendMsg(msg, type) {
    let msgDiv = document.getElementById("text");
    msgDiv.innerHTML = '';

    let msgToScreen = `<p class="${type}"> ${msg} </p>`

    msgDiv.innerHTML = msgToScreen;
    setTimeout(function () {
        msgDiv.innerHTML = `<p class="${type}"></p>`;
    }, 3000);

}

function InputsClund() {
    document.getElementById("tutorInput").value = "";
    document.getElementById("namePet-Input").value = "";
    document.getElementById("species-Input").value = "";
    document.getElementById("Photograph-Input").value = "";
    document.getElementById("Birthday-Input").value = "";
}

function isURLValid() {
    const url = document.getElementById("Photograph-Input").value;

    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        sendMsg("A url da imagem está errada!", "error")
        return false;
    }
}

function ShowRegister() {
    document.getElementById("main1").classList.remove("hidden")
    document.getElementById("main2").classList.add("hidden")
}
function ShowPets() {
    document.getElementById("main2").classList.remove("hidden")
    document.getElementById("main1").classList.add("hidden")
}
function listHTML() {
    const listHTML = document.getElementById("listPets");
    listHTML.innerHTML = '';
    let array = petList.petArrey;

    array.forEach(pet => {
        // ... (other pet details)
        const petDiv = `<div class="petDetail" id="div${pet.id}">
            <!-- ... (other details) -->
            <p><b>Idade:</b> ${pet.age} anos</p>
            <div id="petButtons">
                <button onclick="deletePet(${pet.id})">Delete</button>
                <button onclick="EditPet(${pet.id})">Editar</button>
            </div>
        </div>`;
        listHTML.innerHTML += petDiv;
    })
}

function listHTML() {

    const listHTML = document.getElementById("listPets");
    listHTML.innerHTML = '';
    let array = petList.petArrey;

    array.forEach(pet => {
        const petDiv = `<div class="petDetail" id="div${pet.id}">
        <img src="${pet.photograph}" alt="${pet.namePet}">
        <p><b>Tutor:</b> ${pet.tutor}</p> 
        <p><b>Nome do pet:</b> ${pet.namePet}</p> 
        <p><b>Espécie:</b> ${pet.specie}</p> 
        <p><b>Data de nascimento:</b> ${pet.Birthday}</p>
        <p><b>Idade:</b> ${pet.age} anos</p>
        <div id="petButtons">
            <button onclick="deletePet(${pet.id})">Delete</button>
            <button onclick="EditPet(${pet.id})">Editar</button>
        </div>`;
        listHTML.innerHTML += petDiv;
    })
}
const pet = new Pet();

function deletePet(id) {
    document.getElementById("div" + id).classList.add("hidden")
    petList.remove(id);   
}



