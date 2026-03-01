let kolor = 1
let gry = [
    'Mewgenics',
    'TheBindingofIsaac',
    'SuperMeatBoy'
]
let funfacty= [
    'Wyprodukowanie Isaaca zajeło 3 miesiące',
    'Isaac był pierwszą grą uznaną w niemczech za 16+',
    'Tytuł jest inspirowany biblijnym Izakiem',
    'W grze jest ponad 800przedmiotów',
    'pierwszy zwiastun Mewgenics pojawił się 13 lat temu, gra została wydana w lutym tego roku',
]
function funfact(){
let diff = document.getElementById('diff')
let funfact = funfacty[Math.floor(Math.random() * 5) + 0]
diff.textContent = funfact
}
window.onload = funfact

function zmianakoloru(){
kolor++
if(kolor%2==0){
    document.getElementById("bodyid").style.backgroundColor = "#2f2434"
    document.getElementById("kolor1").className = "jasny";
    document.getElementById("kolor2").className = "jasny";
}else{
    document.getElementById("bodyid").style.backgroundColor = "#fbefdf"
    document.getElementById("kolor1").className = "ciemny";
    document.getElementById("kolor2").className = "ciemny";
}
}

function pokazListe() {
    let lista = document.getElementById("listaGier");

    if (lista.style.display == "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

function skrolujdo(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
function szukaj() {
    let input = document.getElementById("szuka").value.toLowerCase();

    for (i = 0; i < gry.length; i++) {
        let nazwa = gry[i].toLowerCase();
        let id = gry[i].replaceAll(" ", "");
        let sekcja = document.getElementById(id);

        if (nazwa.indexOf(input) > -1) {
            sekcja.style.display = "block";
        } else {
            sekcja.style.display = "none";
        }
     }
}


function loguj(){
    let formularz = document.getElementById("formularz");
    let login = document.getElementById("login");
    let komunikat = document.getElementById("komunikat");    
    let imie = login.value;
    if(imie === ""){
        komunikat.innerHTML = "Uzupełnij login poprawnie"
    }else{
        komunikat.innerHTML = "Witaj " + imie 
    }}


