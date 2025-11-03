const saisie = document.getElementById('saisie-tache');
const butAjout = document.querySelector('.icone-ajout');

const aFaire = document.querySelector('.liste-afaire');

const fait = document.querySelector('.liste-fait');
const butDel = document.querySelector('.icone-trash');


saisie.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        const task = document.createElement("li")
        task.innerText = saisie.value;
        aFaire.append(task);
        saisie.value = "";
    }
});
butAjout.addEventListener("click", function(event) {
        const task = document.createElement("li")
        task.innerText = saisie.value;
        aFaire.append(task);
        saisie.value = "";
});
function move(event) {
    const move = event.target;
    move.classList.add('fait')
    move.removeEventListener("click", move)
    fait.append(move)
}
aFaire.addEventListener("click", move);

butDel.addEventListener("click", function(event){
    fait.innerHTML = '';
})