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
  { baslik: "Kalpten Konuşan", metin: "Bugün biri sana içini döküyorsa, çözüm önermek yerine sadece dinlemek daha değerli olabilir." },
  { baslik: "Boş Ver Gitsin", metin: "Değiştiremeyeceğin bir şeye kafanı takmak yerine bugün bırakmayı dene." },
  { baslik: "Göz Önünde", metin: "Bir süredir fark edilmediğini düşündüğün bir emeğin bugün karşılık bulabilir." },
  { baslik: "Plan Değişikliği", metin: "Bugün bir planının aksaması, aslında seni daha iyi bir yere yönlendirebilir." },
  { baslik: "Sözünü Tut", metin: "Birine verdiğin küçük bir sözü bugün hatırlayıp yerine getirmek iyi gelir." },
  { baslik: "Yalnız Değilsin", metin: "Bugün yardım istemekten çekinme, çevrendekiler göründüğünden daha hazır." },
  { baslik: "Kıskançlık Tuzağı", metin: "Başkasının gidişatıyla kendini kıyaslamak yerine bugün kendi hızına odaklan." },
  { baslik: "Eve Dönüş", metin: "Dışarıda aradığın huzur, bugün aslında evde ya da ailende olabilir." },
  { baslik: "Ufak Bir Risk", metin: "Küçük, hesaplı bir risk bugün almaya değer olabilir." },
  { baslik: "Sessizlik İyi Gelir", metin: "Bugün biraz yalnız kalmak, kafanı toparlaman için gerekli olabilir." },
  { baslik: "Takdir Et", metin: "Yakınındaki birine bugün bir teşekkür borcun olabilir, söylemenin tam zamanı." },
  { baslik: "Dönüşüm", metin: "Zor geçen bir süreç, bugün itibarıyla sana bir şeyler öğretmiş olarak geride kalıyor." },
  { baslik: "Fazla Düşünme", metin: "Bugün bir konuyu olduğundan büyütme eğiliminde olabilirsin, biraz mesafe koy." },
  { baslik: "Küçük Keyifler", metin: "Büyük planlar yerine bugün seni mutlu eden küçük bir şeye zaman ayır." },
  { baslik: "Netlik Geliyor", metin: "Kararsız kaldığın bir konuda bugün ya da yarın kafanın netleştiğini hissedebilirsin." },
];

// ===== Günlük burç yorumu =====
// Gerçek astrolojik hesaplama değil: tarihe göre sabit bir indeks
// hesaplıyoruz. Aynı gün aynı burca herkese aynı yorum çıkıyor,
// burçlar arası da farklılaşıyor, gece yarısı hepsi birden değişiyor.

const burcYorumlari = [
  "Bugün başladığın işi yarıda bırakmadan bitirmen, kafanı rahatlatacak.",
  "Yakınındaki biriyle aranızda küçük bir yanlış anlaşılma varsa, açık konuşmak için uygun bir gün.",
  "Para konusunda bugün aceleci kararlar almaktan kaçın, bir gün beklemek zarar vermez.",
  "İş hayatında sessizce yürüttüğün bir çaba, bugün ya da yarın fark edilebilir.",
  "Bugün enerjin biraz düşük olabilir, kendine zorlama yapmadan ilerle.",
  "Uzun süredir ertelediğin bir görüşmeyi yapmak için güzel bir gün.",
  "Çevrendekilerle aranda bugün küçük bir yakınlaşma hissedebilirsin.",
  "Bir konuda haklı olduğunu düşünüyorsan, bugün bunu savunmaktan çekinme.",
  "Günün ilerleyen saatlerinde beklemediğin küçük bir haber gelebilir.",
  "Bugün plan yapmak yerine akışa bırakmak daha iyi sonuç verebilir.",
  "İlişkilerinde bugün biraz daha sabırlı olman, gerginliği azaltır.",
  "Harcamalarını gözden geçirmek için bugün uygun bir zaman.",
  "Kendine ayırdığın küçük bir an, bugün bütün günü değiştirebilir.",
  "Bir karar vermekte zorlanıyorsan, bugün değil yarın karar vermek daha sağlıklı.",
  "Eski bir konu bugün beklenmedik şekilde tekrar gündeme gelebilir.",
  "Bugün etrafındakilere her zamankinden biraz daha dikkatli davranman, sana geri dönecek.",
  "İş birliği yapman gereken biriyle bugün aranızda uyum daha kolay kurulabilir.",
  "Bedenin bugün dinlenmek istiyor olabilir, buna kulak vermekte fayda var.",
  "Bugün söylediğin bir söz, düşündüğünden daha fazla ağırlık taşıyabilir — dikkatli seç.",
  "Küçük bir fedakârlık, bugün ilişkilerinde büyük bir fark yaratabilir.",
  "Yeni bir şey öğrenmeye bugün her zamankinden daha açık olabilirsin.",
  "Bugün bir konuda ikna olman için fazla zorlanmana gerek yok, içgüdün doğruyu biliyor.",
  "Ailenle ya da yakınlarınla ilgili bir konu bugün gündemine gelebilir.",
  "Bugün rekabetten çok iş birliği seni daha ileri taşır.",
];

function burcYorumuGetir(burcIndeksi) {
  const bugun = new Date();
  const gunSayisi = Math.floor(
    Date.UTC(bugun.getFullYear(), bugun.getMonth(), bugun.getDate()) / 86400000
  );
  const indeks = (gunSayisi + burcIndeksi * 7) % burcYorumlari.length;
  return burcYorumlari[indeks];
}

(function () {
  const grid = document.getElementById("zodiacGrid");
  if (!grid) return;

  const sonuc = document.getElementById("zodiacResult");
  const sonucAd = document.getElementById("zodiacResultName");
  const sonucMetin = document.getElementById("zodiacResultText");
  const butonlar = Array.from(grid.querySelectorAll(".zodiac-btn"));

  butonlar.forEach((btn) => {
    btn.addEventListener("click", () => {
      butonlar.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const isim = btn.dataset.name;
      const indeks = Number(btn.dataset.sign);
      sonucAd.textContent = isim;
      sonucMetin.textContent = burcYorumuGetir(indeks);
      sonuc.hidden = false;
    });
  });
})();

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

  function sonCikanlariOku() {
    try {
      return JSON.parse(localStorage.getItem("falapp_kart_gecmisi") || "[]");
    } catch (e) {
      return [];
    }
  }

  function sonCikanlariYaz(liste) {
    try {
      localStorage.setItem("falapp_kart_gecmisi", JSON.stringify(liste));
    } catch (e) {
      /* kaydedilemezse sorun değil, sadece tekrar önleme çalışmaz */
    }
  }

  function rastgeleKartSec() {
    const sonGecmis = sonCikanlariOku();
    let adaylar = gununKartlari.map((_, i) => i).filter((i) => !sonGecmis.includes(i));
    if (adaylar.length === 0) {
      adaylar = gununKartlari.map((_, i) => i);
    }
    const secilenIndeks = adaylar[Math.floor(Math.random() * adaylar.length)];
    const hafizaUzunlugu = Math.min(gununKartlari.length - 1, 10);
    const yeniGecmis = [...sonGecmis, secilenIndeks].slice(-hafizaUzunlugu);
    sonCikanlariYaz(yeniGecmis);
    return secilenIndeks;
  }

  function sec(secilenEl) {
    const kartIndeks = rastgeleKartSec();
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

// ===== Üyelik / Giriş (Supabase) =====
(function () {
  if (typeof window.supabase === "undefined") return;
  const sb = window.supabase.createClient(FALAPP_SUPABASE_URL, FALAPP_SUPABASE_ANON_KEY);

  const authOpenBtn = document.getElementById("authOpenBtn");
  const authOverlay = document.getElementById("authOverlay");
  const authCloseBtn = document.getElementById("authCloseBtn");
  const tabLogin = document.getElementById("tabLogin");
  const tabSignup = document.getElementById("tabSignup");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginMsg = document.getElementById("loginMsg");
  const signupMsg = document.getElementById("signupMsg");
  const loginEmailMsg = document.getElementById("loginEmailMsg");
  const signupEmailMsg = document.getElementById("signupEmailMsg");
  const signupPasswordMsg = document.getElementById("signupPasswordMsg");
  const accountChip = document.getElementById("accountChip");
  const accountGreeting = document.getElementById("accountGreeting");
  const adminLink = document.getElementById("adminLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!authOpenBtn || !authOverlay) return;

  function mesajGoster(el, metin, tur) {
    el.textContent = metin;
    el.classList.remove("error", "ok");
    if (tur) el.classList.add(tur);
  }

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-zA-ZÇĞİÖŞÜçğıöşü]{2,}$/;
  const SIFRE_NOKTALAMA = /[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]/;
  const SIFRE_BUYUK_HARF = /[A-ZÇĞİÖŞÜ]/;

  function emailGecerliMi(email) {
    return EMAIL_REGEX.test(email);
  }

  function sifreGecerliMi(sifre) {
    return sifre.length >= 6 && SIFRE_BUYUK_HARF.test(sifre) && SIFRE_NOKTALAMA.test(sifre);
  }

  function emailAlaniniDenetle(inputEl, msgEl) {
    const deger = inputEl.value.trim();
    if (!deger) { mesajGoster(msgEl, ""); return true; }
    if (!emailGecerliMi(deger)) {
      mesajGoster(msgEl, "Geçerli bir e-posta adresi gir (örn: isim@eposta.com).", "error");
      return false;
    }
    mesajGoster(msgEl, "");
    return true;
  }

  function sifreAlaniniDenetle() {
    const deger = document.getElementById("signupPassword").value;
    if (!deger) {
      mesajGoster(signupPasswordMsg, "En az 6 karakter, bir büyük harf ve bir noktalama işareti (!?.,-_ vb.) içermeli.");
      return false;
    }
    if (!sifreGecerliMi(deger)) {
      const eksikler = [];
      if (deger.length < 6) eksikler.push("en az 6 karakter");
      if (!SIFRE_BUYUK_HARF.test(deger)) eksikler.push("bir büyük harf");
      if (!SIFRE_NOKTALAMA.test(deger)) eksikler.push("bir noktalama işareti");
      mesajGoster(signupPasswordMsg, "Eksik: " + eksikler.join(", ") + ".", "error");
      return false;
    }
    mesajGoster(signupPasswordMsg, "Şifre uygun.", "ok");
    return true;
  }

  function modalAc() {
    authOverlay.hidden = false;
    mesajGoster(loginMsg, "");
    mesajGoster(signupMsg, "");
    mesajGoster(loginEmailMsg, "");
    mesajGoster(signupEmailMsg, "");
    mesajGoster(signupPasswordMsg, "En az 6 karakter, bir büyük harf ve bir noktalama işareti (!?.,-_ vb.) içermeli.");
  }
  function modalKapat() {
    authOverlay.hidden = true;
  }

  function sekmeSec(girisMi) {
    tabLogin.classList.toggle("active", girisMi);
    tabSignup.classList.toggle("active", !girisMi);
    loginForm.hidden = !girisMi;
    signupForm.hidden = girisMi;
  }

  function girisDurumunuGuncelle(session) {
    if (session && session.user) {
      authOpenBtn.hidden = true;
      accountChip.hidden = false;
      const adSoyad = session.user.user_metadata && session.user.user_metadata.full_name;
      const ilkAd = adSoyad ? adSoyad.trim().split(" ")[0] : "";
      accountGreeting.textContent = ilkAd ? ("Hoş geldin, " + ilkAd) : (session.user.email || "");
      if (adminLink) {
        sb.from("profiles").select("is_admin").eq("id", session.user.id).maybeSingle()
          .then(({ data }) => { adminLink.hidden = !(data && data.is_admin); })
          .catch(() => { adminLink.hidden = true; });
      }
    } else {
      authOpenBtn.hidden = false;
      accountChip.hidden = true;
      accountGreeting.textContent = "";
      if (adminLink) adminLink.hidden = true;
    }
  }

  authOpenBtn.addEventListener("click", () => { sekmeSec(true); modalAc(); });
  authCloseBtn.addEventListener("click", modalKapat);
  authOverlay.addEventListener("click", (e) => { if (e.target === authOverlay) modalKapat(); });
  tabLogin.addEventListener("click", () => sekmeSec(true));
  tabSignup.addEventListener("click", () => sekmeSec(false));

  const loginEmailInput = document.getElementById("loginEmail");
  const signupEmailInput = document.getElementById("signupEmail");
  const signupPasswordInput = document.getElementById("signupPassword");

  loginEmailInput.addEventListener("blur", () => emailAlaniniDenetle(loginEmailInput, loginEmailMsg));
  loginEmailInput.addEventListener("input", () => { if (loginEmailMsg.textContent) emailAlaniniDenetle(loginEmailInput, loginEmailMsg); });

  signupEmailInput.addEventListener("blur", () => emailAlaniniDenetle(signupEmailInput, signupEmailMsg));
  signupEmailInput.addEventListener("input", () => { if (signupEmailMsg.textContent) emailAlaniniDenetle(signupEmailInput, signupEmailMsg); });

  signupPasswordInput.addEventListener("input", sifreAlaniniDenetle);
  signupPasswordInput.addEventListener("focus", () => {
    if (!signupPasswordInput.value) mesajGoster(signupPasswordMsg, "En az 6 karakter, bir büyük harf ve bir noktalama işareti (!?.,-_ vb.) içermeli.");
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    if (!emailAlaniniDenetle(loginEmailInput, loginEmailMsg)) return;
    mesajGoster(loginMsg, "Giriş yapılıyor...");
    const password = document.getElementById("loginPassword").value;
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      mesajGoster(loginMsg, "Giriş başarısız: e-posta ya da şifre hatalı.", "error");
      return;
    }
    mesajGoster(loginMsg, "Giriş yapıldı!", "ok");
    setTimeout(modalKapat, 600);
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const adSoyad = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;

    const emailTamam = emailAlaniniDenetle(signupEmailInput, signupEmailMsg);
    const sifreTamam = sifreAlaniniDenetle();
    if (!emailTamam || !sifreTamam) {
      mesajGoster(signupMsg, "Lütfen üstteki uyarıları düzelt.", "error");
      return;
    }

    mesajGoster(signupMsg, "Hesap oluşturuluyor...");
    const { error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { full_name: adSoyad } }
    });
    if (error) {
      mesajGoster(signupMsg, "Üyelik oluşturulamadı: " + error.message, "error");
      return;
    }
    mesajGoster(signupMsg, "Hesabın oluşturuldu! E-postanı doğrulamak için gelen kutunu kontrol et.", "ok");
    setTimeout(modalKapat, 1500);
  });

  logoutBtn.addEventListener("click", async () => {
    await sb.auth.signOut();
  });

  sb.auth.onAuthStateChange((_event, session) => {
    girisDurumunuGuncelle(session);
  });

  sb.auth.getSession().then(({ data }) => {
    girisDurumunuGuncelle(data.session);
  });
})();

// ===== Falcılar listesi (Supabase'ten) =====
(function () {
  const falciList = document.getElementById("falciList");
  if (!falciList || typeof window.supabase === "undefined") return;
  const sb = window.supabase.createClient(FALAPP_SUPABASE_URL, FALAPP_SUPABASE_ANON_KEY);

  function falciSatiriOlustur(f) {
    const durumHtml = f.durum === "musait"
      ? '<span class="dot dot-live"></span> Müsait'
      : '<span class="dot dot-busy"></span> ' + (f.bekleme_notu || "Meşgul");

    const row = document.createElement("div");
    row.className = "falci-row";
    row.innerHTML = `
      <div class="avatar" style="--hue:${f.avatar_hue || 0}">${f.avatar_kisaltma || "?"}</div>
      <div class="falci-info">
        <strong></strong>
        <span></span>
      </div>
      <div class="falci-rating">★ ${f.puan || "5.0"} <span>(${f.yorum_sayisi || 0})</span></div>
      <div class="falci-status">${durumHtml}</div>
      <a class="btn btn-ghost" href="${f.iletisim_link || '#'}" target="_blank" rel="noopener"></a>
    `;
    row.querySelector(".falci-info strong").textContent = f.ad || "";
    row.querySelector(".falci-info span").textContent = (f.uzmanlik || "") + " · " + (f.deneyim_yili || 0) + " yıl deneyim";
    row.querySelector(".btn-ghost").textContent = f.buton_metni || "Yaz";
    return row;
  }

  sb.from("falcilar")
    .select("*")
    .eq("aktif", true)
    .order("sira", { ascending: true })
    .then(({ data, error }) => {
      if (error || !data || data.length === 0) {
        falciList.innerHTML = '<p class="falci-loading">Şu an falcı listesi yüklenemedi, birazdan tekrar dene.</p>';
        return;
      }
      falciList.innerHTML = "";
      data.forEach((f) => falciList.appendChild(falciSatiriOlustur(f)));
    });
})();
