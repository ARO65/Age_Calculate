//let value = console.dir(document.);
//console.log(value);

let buttn = document.getElementById("p1");
const username = "mustafa";
console.log(
  (buttn.innerHTML = `<strong> ${username} bunu yeni denedi</strong>`)
);

// Les 7 Conseils de Mevlâna (Mevlana'nın 7 Öğüdü)
buttn.innerHTML = `
    <div style="border-left: 5px solid #d4af37; padding: 15px; background-color: #fffaf0; font-family: 'Georgia', serif;">
        <h3 style="color: #5d4037;">Les Sept Conseils de Rûmî</h3>
        <ul style="list-style-type: none; padding: 0; line-height: 1.8;">
            <li>✨ <em>Dans la générosité et l'aide, sois comme la rivière.</em></li>
            <li>✨ <em>Dans la compassion et la grâce, sois comme le soleil.</em></li>
            <li>✨ <em>Pour masquer les fautes d'autrui, sois comme la nuit.</em></li>
            <li>✨ <em>Dans la colère et l'irritabilité, sois comme un mort.</em></li>
            <li>✨ <em>Dans l'humilité et la modestie, sois comme la terre.</em></li>
            <li>✨ <em>Dans la tolérance, sois comme la mer.</em></li>
            <li style="margin-top: 10px;"><strong>Sois tel que tu parais, ou parais tel que tu es.</strong></li>
        </ul>
    </div>
`;
// Elemanları seçelim
const buton = document.getElementById("btn-getir");
const alan = document.getElementById("p1");

buton.addEventListener("click", function () {
  alan.innerHTML = `
        <div style="border-left: 5px solid #d4af37; padding: 15px; background-color: #fffaf0; font-family: 'Georgia', serif;">
            <h3 style="color: #1713f3ff;">Les Sept Conseils de Rûmî</h3>
            <ul style="list-style-type: none; padding: 0; line-height: 1.8;">
                <li>✨ <em>Dans la générosité et l'aide, sois comme la rivière.</em></li>
                <li>✨ <em>Dans la compassion et la grâce, sois comme le soleil.</em></li>
                <li>✨ <em>Dans la tolérance, sois comme la mer.</em></li>
                <li style="margin-top: 10px;"><strong>Sois tel que tu parais, ou parais tel que tu es.</strong></li>
            </ul>
        </div>
    `;

  buton.textContent = "Pasaj Yüklendi ✅";
  buton.style.backgroundColor = "green";
  document.body.style.backgroundColor = "green";

  // Klavyedeki herhangi bir tuşa basıldığında (keydown) çalışır
  document.addEventListener("keydown", function () {
    // 1. Rastgele bir renk kodu üretelim (HEX formatında)
    const rastgeleRenk =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    // 2. Sayfanın (body) arka plan rengini bu renkle değiştirelim
    document.body.style.backgroundColor = rastgeleRenk;

    // 3. Konsola hangi rengin uygulandığını yazdıralım
    console.log("Yeni Arka Plan Rengi: " + rastgeleRenk);
  });
});
