const tombolTema = document.getElementById("btnTema");
const tombolSapa = document.getElementById("btnSapa");
const judul = document.getElementById("judul");
const body = document.body;

tombolTema.addEventListener('click', () => {
    body.classList.toggle('dark');
    if(body.classList.contains("dark")){
    judul.textContent = "Profil Saya (Mode Gelap)";
    } else {
    judul.textContent = "Profil Saya";
    }
})

tombolSapa.addEventListener('click', () => {
    let nama = prompt("Siapa namamu?");
    if(nama){
        alert("Halo "+nama+", Senang bertemu denganmu 🙂")
    } else {
        alert("Kasih nama dong!")
    }
})