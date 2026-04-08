// 🌙 Tema
function temaDegistir() {
    document.body.classList.toggle("dark");
}

// ⌨️ Yazı efekti
const metin = "Merhaba, ben Hasan!";
let index = 0;

function yaz() {
    if (document.getElementById("yazi")) {
        if (index < metin.length) {
            document.getElementById("yazi").innerHTML += metin.charAt(index);
            index++;
            setTimeout(yaz, 100);
        }
    }
}
yaz();

const projelistesi = [
    { ad: "Robotik", kategori: "web" },
    { ad: "Atık pil yarışması", kategori: "web" },
    { ad: "Plastik kapak yarışması", kategori: "mobil" },
    { ad: "Futbol turnuvası", kategori: "mobil" },
    { ad: "web sitesi", kategori: "web" }
];

function projeleriGoster(liste) {
    const alan = document.getElementById("projeAlani");
    if (!alan) return;

    alan.innerHTML = "";

    liste.forEach(proje => {
        alan.innerHTML += `
        <div class="kart">
            <h3>${proje.ad}</h3>
            <p>${proje.kategori}</p>
        </div>
        `;
    });
}

function filtrele(kategori) {
    if (kategori === "hepsi") {
        projeleriGoster(projelistesi);
    } else {
        const filtrelenmisprojeler = projelistesi.filter(p => p.kategori === kategori);
        projeleriGoster(filtrelenmisprojeler);
    }
}

projeleriGoster(projelistesi);