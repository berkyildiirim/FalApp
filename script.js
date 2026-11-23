// ===== Günün kartı =====
// Backend yok: tarih bazlı sabit bir indeks seçiyoruz, böylece aynı gün
// herkese aynı kart çıkıyor, gece yarısı değişiyor.

const gununKartlari = [
  { baslik: "Yeni Başlangıç", metin: "Ertelediğin bir adımı bugün atmak için iyi bir gün. Küçük bir hareket bile yönünü değiştirebilir." },
  { baslik: "Sabır Zamanı", metin: "Bazı şeyler olgunlaşmak için zaman ister. Bugün zorlamak yerine beklemeyi dene." },
  { baslik: "Beklenmedik Haber", metin: "Yakın zamanda seni şaşırtacak bir gelişme olabilir. Telefonuna uzak durma." },
  { baslik: "İçindeki Sese Güven", metin: "Mantık ile içgüdün çatışıyorsa bugün içgüdüne biraz daha kulak ver." },
  { baslik: "Şans Senden Yana", metin: "Girişimlerinde bugün biraz daha cesur olabilirsin, rüzgar arkandan esiyor." },
  { baslik: "Eski Bir Bağlantı", metin: "Uzun zamandır konuşmadığın biri aklına düşebilir. Belki de mesajı sen atmalısın." },
  { baslik: "Yavaşla", metin: "Bugün koşturmak yerine bir şeyi gerçekten bitirmeye odaklan." },
  { baslik: "Para Konusunda Dikkat", metin: "Harcamalarını bir kez daha gözden geçirmek bugün işine yarayabilir." },
  { baslik: "Net Konuş", metin: "Söylemek isteyip de erteledğin bir şey varsa, bugün açık konuşmak rahatlatır." },
  { baslik: "Küçük Bir Sürpriz", metin: "Gün içinde beklemediğin küçük bir iyilik ya da haber seni bekliyor olabilir." },
  { baslik: "Kendine Vakit Ayır", metin: "Herkese yetişmeye çalışırken kendini unutma. Bugün biraz da sana kalsın." },
  { baslik: "Eski Bir Konu Kapanıyor", metin: "Uzun süredir zihnini meşgul eden bir mesele bugün çözüme yaklaşabilir." },
  { baslik: "Yeni Bir Fikir", metin: "Aklına gelen 'olmaz' dediğin bir fikri bir kez daha düşün, olgunlaşmış olabilir." },
  { baslik: "Çevrene Güven", metin: "Yalnız taşımaya çalıştığın bir şeyi paylaşmak bugün seni rahatlatır." },
  { baslik: "Dengede Kal", metin: "İş ve özel hayat arasında bugün bilinçli bir sınır çizmek iyi gelir." },
  { baslik: "Cesaret Günü", metin: "Korktuğun için ertelediğin bir görüşme ya da adım için bugün uygun." },
  { baslik: "Bereket Zamanı", metin: "Emek verdiğin bir konu, beklediğinden biraz daha erken karşılığını verebilir." },
  { baslik: "Biraz Dikkat", metin: "Önemli bir evrak, mesaj ya da detayı bugün iki kez kontrol et." },
  { baslik: "Şükran", metin: "Bugün sahip olduklarına bir an durup bakmak, zihnini açar." },
  { baslik: "Yeni Bir Tanışma", metin: "Kısa bir sohbet bile bugün beklenmedik bir kapı aralayabilir." },
  { baslik: "Toparlanma Vakti", metin: "Dağınık hissettiren bir konuyu bugün tek tek sıraya koymak iyi gelir." },
  { baslik: "Güçlü Duruş", metin: "Haklı olduğun bir konuda bugün geri adım atmana gerek yok." },
  { baslik: "Hafifle", metin: "Taşıdığın bir sorumluluğu biraz bırakmak ya da paylaşmak zamanı olabilir." },
  { baslik: "Değişim Rüzgarı", metin: "Alıştığın bir düzende küçük bir değişiklik bugün sana iyi gelebilir." },
];

function tarihAnahtari() {
  const b = new Date();
  return `${b.getFullYear()}-${b.getMonth()}-${b.getDate()}`;
}

(function () {
  const yayilim = document.getElementById("cardSpread");
  const ipucu = document.getElementById("dailyHint");
  if (!yayilim) return;

  const kartlar = Array.from(yayilim.querySelectorAll(".card-flip"));

  function kartiDoldur(el, kart) {
    el.querySelector(".card-back strong").textContent = kart.baslik;
    el.querySelector(".card-back p").textContent = kart.metin;
  }

  function kilitle() {
    yayilim.setAttribute("data-locked", "true");
  }

  function sec(secilenEl) {
    const kartIndeks = Math.floor(Math.random() * gununKartlari.length);
    kartiDoldur(secilenEl, gununKartlari[kartIndeks]);
    secilenEl.classList.add("flipped");
    kilitle();
    ipucu.textContent = "Bugünlük bu kadar — yarın yeni bir kart seçebilirsin.";
    try {
      localStorage.setItem(
        "falapp_gunun_cekilisi",
        JSON.stringify({ gun: tarihAnahtari(), slot: secilenEl.dataset.slot, kart: kartIndeks })
      );
    } catch (e) {
      /* localStorage kapalıysa sorun değil, sadece hatırlanmaz */
    }
  }

  yayilim.setAttribute("data-locked", "false");

  try {
    const kayit = JSON.parse(localStorage.getItem("falapp_gunun_cekilisi") || "null");
    if (kayit && kayit.gun === tarihAnahtari()) {
      const secilenEl = kartlar.find((k) => k.dataset.slot === String(kayit.slot));
      if (secilenEl && gununKartlari[kayit.kart]) {
        kartiDoldur(secilenEl, gununKartlari[kayit.kart]);
        secilenEl.classList.add("flipped");
        kilitle();
        ipucu.textContent = "Bugünkü kartını zaten seçtin — yarın tekrar gel.";
      }
    }
  } catch (e) {
    /* kayıt okunamazsa baştan seçim yapılır, sorun değil */
  }

  kartlar.forEach((el) => {
    el.addEventListener("click", () => {
      if (yayilim.getAttribute("data-locked") === "true") return;
      sec(el);
    });
    el.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && yayilim.getAttribute("data-locked") !== "true") {
        e.preventDefault();
        sec(el);
      }
    });
  });
})();
