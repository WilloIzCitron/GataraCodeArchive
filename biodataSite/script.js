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

const whatsappButton = document.getElementById("whatsapp");
const instaButton = document.getElementById("instagram");
const xButton = document.getElementById("twitter");


whatsappButton.addEventListener('click', () => {
    var metaTag = document.createElement("meta");
    metaTag.setAttribute("http-equiv", "refresh");
    metaTag.setAttribute("content", "0; url=https://whatsapp.com/");
    document.head.appendChild(metaTag);
    alert("Aku akan memandu anda untuk melihat whatsapp");
    
})
instaButton.addEventListener('click', () => {
    var metaTag = document.createElement("meta");
    metaTag.setAttribute("http-equiv", "refresh");
    metaTag.setAttribute("content", "0; url=https://www.instagram.com/willoizcitron/");
    document.head.appendChild(metaTag);
    alert("Aku akan memandu anda untuk melihat instagramku");
    
})
xButton.addEventListener('click', () => {
    var metaTag = document.createElement("meta");
    metaTag.setAttribute("http-equiv", "refresh");
    metaTag.setAttribute("content", "0; url=https://x.com/@WilloCitron");
    document.head.appendChild(metaTag);
    alert("Aku akan memandu anda untuk melihat twitterku");
    
})
