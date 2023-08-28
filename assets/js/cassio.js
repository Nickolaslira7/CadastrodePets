const pets = new pet();

function comporPet(){
    let tutor = document.getElementById ("tutor").value;
    let namePet = document.getElementById("namePet").value;
    let especie = document.getElementById("especie").value;
    let fotinha = document.getElementById("fotinha").value;
    let nascimento = document.getElementById("nascimento").value;

    const pet = new pet(tutor, namePet, especie, fotinha, nascimento, pets.ContId());
    gameLibrary.add(pet);

}




function InputEmpty() {
    let tutor = document.getElementById("input-tutor").value;
    let namePet = document.getElementById("input-namePet").value;
    let especie = document.getElementById("input-especie").value;
    let fotinha = document.getElementById("input-fotinha").value;
    let nascimento = document.getElementById("input-nascimento").value;

    if (tutor == "" || namePet == "" || especie == "" || fotinha == "" || nascimento == "") {
        sendMsg("Preencha todos os campos!", "error")
        return true
    } else {
        sendMsg("Cadastrado com sucesso", "correct")
        return false
    }
}