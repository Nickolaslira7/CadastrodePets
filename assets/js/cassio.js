class Pet{
    constructor(tutor, namePet, specie, photograph, Birthday){
        this.tutor = tutor;
        this.namePet = namePet;
        this.specie = specie;
        this.photograph = photograph;
        this.Birthday = Birthday;
        this.id = this.ContId();
    }
    ContId() {
        let id = 1;
        id++
        return id
    }
}

function composePet() {
    let tutor = document.getElementById("tutorInput").value
    let namePet = document.getElementById("namePet-Input").value
    let specie = document.getElementById("species-Input").value
    let photograph = document.getElementById("Photograph-Input").value
    let Birthday = document.getElementById("Birthday-Input").value

    const NewPet = new Pet(tutor, namePet, specie, photograph, Birthday, pet.ContId());
    petList.Add(NewPet);
}

class PetList{
    constructor(){
        this.petArrey = [];
    }
    Add(parameter){
        this.petArrey.push(parameter);
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
        const petDiv = `<div class="petDetail" id="div${pet.id}">
        <img src="${pet.photograph}" alt="${pet.namePet}">
        <p><b>Tutor:</b> ${pet.tutor}</p> 
        <p><b>Nome do pet:</b> ${pet.namePet}</p> 
        <p><b>Espécie:</b> ${pet.specie}</p> 
        <p><b>Data de nascimento:</b> ${pet.Birthday}</p>
        <button onclick="deletepet(${pet.id})">Delete</button>
        </div>`;
        listHTML.innerHTML += petDiv;
    })



}


const pet = new Pet();


