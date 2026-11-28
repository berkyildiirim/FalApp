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
  { baslik: "Net Konuş", metin: "Söylemek isteyip de ertelediğin bir şey varsa, bugün açık konuşmak rahatlatır." },
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
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => {
      butonlar.forEach((b) => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
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

// ===== Kaydırma açılışı: "reveal" sınıflı bölümler görünür alana girince
// yumuşakça belirir (bkz. style.css html.js-reveal .reveal). Bir bölüm
// hiç kesişmezse (ör. çok kısa sayfa, ya da gözlemci kurulamazsa) diye
// kısa bir süre sonra kalan tüm reveal'ları da görünür yapan bir güvenlik
// ağı var — hiçbir içerik JS yüzünden kalıcı olarak gizli kalmasın. =====
(function () {
  const revealEl = document.querySelectorAll(".reveal");
  if (revealEl.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    revealEl.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const gozlemci = new IntersectionObserver(
    (girdiler, obs) => {
      girdiler.forEach((g) => {
        if (g.isIntersecting) {
          g.target.classList.add("is-visible");
          obs.unobserve(g.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );
  revealEl.forEach((el) => gozlemci.observe(el));

  // Güvenlik ağı: 4 saniye sonra hâlâ görünür olmamış bölüm kalmışsa
  // (beklenmedik bir durum yüzünden) doğrudan görünür yap.
  setTimeout(() => {
    revealEl.forEach((el) => el.classList.add("is-visible"));
  }, 4000);
})();

// ===== Yüzen WhatsApp CTA'sı: hero geçildikten sonra belirir =====
(function () {
  const cta = document.getElementById("floatingCta");
  const hero = document.querySelector(".hero");
  if (!cta || !hero) return;

  const esikGozlemci = new IntersectionObserver(
    (girdiler) => {
      girdiler.forEach((g) => {
        cta.classList.toggle("visible", !g.isIntersecting && g.boundingClientRect.top < 0);
      });
    },
    { threshold: 0, rootMargin: "-10% 0px 0px 0px" }
  );
  esikGozlemci.observe(hero);
})();

// ===== Nasıl çalışır / fiyat / yorum vb. bölüm linklerinde aktif durum
// (kaydırırken hangi bölümdeyse üst menüde ve mobil hızlı gezinmede
// o link vurgulanır) =====
(function () {
  const bolumIdleri = ["falcilar", "nasil-calisir", "fiyat", "yorumlar", "burc", "sss"];
  const bolumler = bolumIdleri
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (bolumler.length === 0) return;

  const navLinkleri = Array.from(document.querySelectorAll('.main-nav a[href^="#"], .mobile-quicknav a[href^="#"]'));

  function aktifYap(id) {
    navLinkleri.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }

  const bolumGozlemci = new IntersectionObserver(
    (girdiler) => {
      girdiler.forEach((g) => {
        if (g.isIntersecting) aktifYap(g.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  bolumler.forEach((b) => bolumGozlemci.observe(b));
})();

// ===== Ortak Supabase bağlantısı (sayfada tek sefer kurulur) =====
function falappSupabase() {
  if (typeof window.supabase === "undefined") return null;
  if (!window.__falappClient) {
    window.__falappClient = window.supabase.createClient(FALAPP_SUPABASE_URL, FALAPP_SUPABASE_ANON_KEY);
  }
  return window.__falappClient;
}

// ===== Üyelik / Giriş (Supabase) =====
(function () {
  const sb = falappSupabase();
  if (!sb) return;

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
  const falciFilter = document.getElementById("falciFilter");
  const sb = falappSupabase();
  if (!falciList || !sb) return;

  // ===== "Çok tercih edilen" rozeti: rakip platformların çoğu (AskNow'un
  // Top Rated/Elite etiketleri, Mysticsense'in deneyim filtreleri gibi)
  // falcıları güven seviyesine göre kademelere ayırıyor. Burada yeni bir
  // alan eklemeden, zaten var olan gerçek puan + yorum sayısından türetilen
  // sade bir rozetle aynı güveni kuruyoruz (Kas 2026). =====
  function cokTercihEdilenMi(f) {
    const puan = Number(f.puan) || 0;
    const yorumSayisi = Number(f.yorum_sayisi) || 0;
    return puan >= 4.8 && yorumSayisi >= 15;
  }

  function falciSatiriOlustur(f) {
    const durumHtml = f.durum === "musait"
      ? '<span class="dot dot-live"></span> Müsait'
      : '<span class="dot dot-busy"></span> ' + (f.bekleme_notu || "Meşgul");
    const topRozetHtml = cokTercihEdilenMi(f)
      ? '<span class="falci-top-badge">✦ Çok tercih edilen</span>'
      : "";

    const row = document.createElement("div");
    row.className = "falci-row";
    row.innerHTML = `
      <div class="avatar" style="--hue:${f.avatar_hue || 0}">${f.avatar_kisaltma || "?"}</div>
      <div class="falci-info">
        <strong></strong>
        <span></span>
        <span class="falci-verified">✓ Kimlik onaylı</span>
        ${topRozetHtml}
      </div>
      <div class="falci-rating">★ ${f.puan || "5.0"} <span>(${f.yorum_sayisi || 0} yorum)</span></div>
      <div class="falci-status">${durumHtml}</div>
      <a class="btn btn-ghost" href="${f.iletisim_link || '#'}" target="_blank" rel="noopener"></a>
    `;
    row.querySelector(".falci-info strong").textContent = f.ad || "";
    row.querySelector(".falci-info span").textContent = (f.uzmanlik || "") + " · " + (f.deneyim_yili || 0) + " yıl deneyim";
    row.querySelector(".btn-ghost").textContent = f.buton_metni || "Yaz";
    return row;
  }

  async function gercekPuanlariUygula(falcilar) {
    const { data: yorumlar } = await sb.from("yorumlar").select("falci_id, puan");
    if (!yorumlar || yorumlar.length === 0) return falcilar;
    const toplamlar = {};
    yorumlar.forEach((y) => {
      if (!y.falci_id) return;
      if (!toplamlar[y.falci_id]) toplamlar[y.falci_id] = { toplam: 0, adet: 0 };
      toplamlar[y.falci_id].toplam += y.puan;
      toplamlar[y.falci_id].adet += 1;
    });
    falcilar.forEach((f) => {
      const t = toplamlar[f.id];
      if (t && t.adet > 0) {
        f.puan = (t.toplam / t.adet).toFixed(1);
        f.yorum_sayisi = t.adet;
      }
    });
    return falcilar;
  }

  function falciListesiniCiz(falcilar) {
    falciList.setAttribute("aria-busy", "false");
    falciList.innerHTML = "";
    if (falcilar.length === 0) {
      falciList.innerHTML = '<p class="falci-loading">Bu uzmanlıkta şu an müsait falcı yok.</p>';
      return;
    }
    falcilar.forEach((f) => falciList.appendChild(falciSatiriOlustur(f)));
  }

  // ===== Uzmanlığa göre filtre: falcı verisindeki gerçek uzmanlık
  // değerlerinden türetilir, sabit bir kategori listesi varsayılmaz. =====
  function filtreOlustur(falcilar) {
    if (!falciFilter) return;
    const uzmanliklar = [...new Set(falcilar.map((f) => (f.uzmanlik || "").trim()).filter(Boolean))];
    if (uzmanliklar.length < 2) {
      falciFilter.hidden = true;
      falciFilter.innerHTML = "";
      return;
    }

    falciFilter.innerHTML = "";
    const tumuBtn = document.createElement("button");
    tumuBtn.type = "button";
    tumuBtn.className = "falci-filter-btn active";
    tumuBtn.textContent = "Tümü";
    tumuBtn.dataset.value = "";
    falciFilter.appendChild(tumuBtn);

    uzmanliklar.forEach((u) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "falci-filter-btn";
      btn.textContent = u;
      btn.dataset.value = u;
      falciFilter.appendChild(btn);
    });

    const butonlar = Array.from(falciFilter.querySelectorAll(".falci-filter-btn"));
    butonlar.forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.classList.contains("active") ? "true" : "false");
      btn.addEventListener("click", () => {
        butonlar.forEach((b) => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        const secilen = btn.dataset.value;
        const filtrelenmis = secilen ? falcilar.filter((f) => (f.uzmanlik || "").trim() === secilen) : falcilar;
        falciListesiniCiz(filtrelenmis);
      });
    });
    falciFilter.hidden = false;
  }

  async function falciListesiniYukle() {
    const { data, error } = await sb.from("falcilar").select("*").eq("aktif", true).order("sira", { ascending: true });
    if (error || !data || data.length === 0) {
      falciList.setAttribute("aria-busy", "false");
      falciList.innerHTML = '<p class="falci-loading">Şu an falcı listesi yüklenemedi, birazdan tekrar dene.</p>';
      if (falciFilter) { falciFilter.hidden = true; falciFilter.innerHTML = ""; }
      return;
    }
    const falcilarGuncel = await gercekPuanlariUygula(data);
    filtreOlustur(falcilarGuncel);
    falciListesiniCiz(falcilarGuncel);
    heroIstatistikleriniGuncelle(falcilarGuncel.length);
    canliRozetiGuncelle(falcilarGuncel);
  }

  // ===== "Şu an N falcı müsait" canlı rozeti: rakip platformların çoğu
  // (Kasamba, Mysticsense vb.) müsaitlik sayısını öne çıkarıyor; burada
  // zaten yüklenmiş gerçek veriden türetiliyor, ekstra sorgu gerekmiyor. =====
  function canliRozetiGuncelle(falcilar) {
    const rozet = document.getElementById("liveBadge");
    const rozetMetin = document.getElementById("liveBadgeText");
    if (!rozet || !rozetMetin) return;
    const musaitSayisi = falcilar.filter((f) => f.durum === "musait").length;
    if (musaitSayisi === 0) {
      rozet.hidden = true;
      return;
    }
    rozetMetin.textContent = musaitSayisi === 1 ? "1 falcı şu an müsait" : musaitSayisi + " falcı şu an müsait";
    rozet.hidden = false;
  }

  // ===== Hero güven şeridi: gerçek ortalama puan / yorum / falcı sayısı =====
  async function heroIstatistikleriniGuncelle(falciSayisi) {
    const heroStats = document.getElementById("heroStats");
    if (!heroStats) return;
    const { data: yorumlar, error } = await sb.from("yorumlar").select("puan");
    if (error || !yorumlar || yorumlar.length === 0) return;
    const toplamPuan = yorumlar.reduce((acc, y) => acc + (Number(y.puan) || 0), 0);
    const ortalama = (toplamPuan / yorumlar.length).toFixed(1);
    heroStats.innerHTML = `
      <span><strong>${ortalama}</strong>ortalama puan</span>
      <span class="hero-stats-dot" aria-hidden="true">✦</span>
      <span><strong>${yorumlar.length}</strong>yorum</span>
      <span class="hero-stats-dot" aria-hidden="true">✦</span>
      <span><strong>${falciSayisi}</strong>doğrulanmış falcı</span>
    `;
    heroStats.hidden = false;
  }

  window.__falappFalciYenile = falciListesiniYukle;
  falciListesiniYukle();
})();

// ===== Yorumlar (Supabase) =====
(function () {
  const reviewList = document.getElementById("reviewList");
  const sb = falappSupabase();
  if (!reviewList || !sb) return;

  const reviewWriteBox = document.getElementById("reviewWriteBox");
  const reviewLoginHint = document.getElementById("reviewLoginHint");
  const reviewLoginBtn = document.getElementById("reviewLoginBtn");
  const reviewForm = document.getElementById("reviewForm");
  const reviewFalciId = document.getElementById("reviewFalciId");
  const reviewPuan = document.getElementById("reviewPuan");
  const reviewYorum = document.getElementById("reviewYorum");
  const reviewMsg = document.getElementById("reviewMsg");

  let mevcutOturum = null;

  function mesajGoster(el, metin, tur) {
    el.textContent = metin;
    el.classList.remove("error", "ok");
    if (tur) el.classList.add(tur);
  }

  function adSoyadKisalt(adSoyad) {
    if (!adSoyad) return "Üye";
    const parcalar = adSoyad.trim().split(/\s+/);
    if (parcalar.length === 1) return parcalar[0];
    const soyadHarfi = parcalar[parcalar.length - 1][0].toUpperCase();
    return parcalar.slice(0, -1).join(" ") + " " + soyadHarfi + ".";
  }

  function goreliTarih(iso) {
    const farkGun = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
    if (farkGun <= 0) return "Bugün";
    if (farkGun === 1) return "1 gün önce";
    if (farkGun < 7) return farkGun + " gün önce";
    if (farkGun < 35) return Math.floor(farkGun / 7) + " hafta önce";
    if (farkGun < 365) return Math.floor(farkGun / 30) + " ay önce";
    return Math.floor(farkGun / 365) + " yıl önce";
  }

  function yildizGoster(puan) {
    return "★".repeat(puan) + "☆".repeat(5 - puan);
  }

  // ===== Yorum özeti: ortalama puan + 5-1 yıldız dağılımı, tüm yorumlardan
  // hesaplanır (listede gösterilen son 30 yorumla sınırlı değil). =====
  async function ozetGuncelle() {
    const summary = document.getElementById("reviewSummary");
    if (!summary) return;
    const { data: tumPuanlar, error } = await sb.from("yorumlar").select("puan");
    if (error || !tumPuanlar || tumPuanlar.length === 0) {
      summary.hidden = true;
      return;
    }
    const dagilim = [0, 0, 0, 0, 0]; // dagilim[0] -> 5 yıldız ... dagilim[4] -> 1 yıldız
    let toplam = 0;
    let gecerliAdet = 0;
    tumPuanlar.forEach((y) => {
      const p = Math.round(Number(y.puan));
      if (p >= 1 && p <= 5) {
        dagilim[5 - p] += 1;
        toplam += p;
        gecerliAdet += 1;
      }
    });
    if (gecerliAdet === 0) {
      summary.hidden = true;
      return;
    }
    const ortalama = toplam / gecerliAdet;
    document.getElementById("reviewSummaryAvg").textContent = ortalama.toFixed(1);
    document.getElementById("reviewSummaryStars").textContent = yildizGoster(Math.round(ortalama));
    document.getElementById("reviewSummaryCount").textContent = gecerliAdet === 1 ? "1 yorum" : gecerliAdet + " yorum";

    const barsEl = document.getElementById("reviewSummaryBars");
    barsEl.innerHTML = "";
    for (let yildiz = 5; yildiz >= 1; yildiz--) {
      const sayi = dagilim[5 - yildiz];
      const yuzde = Math.round((sayi / gecerliAdet) * 100);
      const row = document.createElement("div");
      row.className = "review-summary-bar-row";
      row.innerHTML = `<span>${yildiz}★</span><span class="review-summary-bar-track"><span class="review-summary-bar-fill" style="width:${yuzde}%"></span></span><span>${sayi}</span>`;
      barsEl.appendChild(row);
    }
    summary.hidden = false;
  }

  function yorumKartiOlustur(y) {
    const article = document.createElement("article");
    article.className = "review" + (y.puan <= 2 ? " review-negative" : "");
    const falciAdi = y.falcilar && y.falcilar.ad ? " · " + y.falcilar.ad : "";

    article.innerHTML = `
      <div class="review-head">
        <strong></strong>
        <span class="stars"></span>
      </div>
      <p></p>
      <span class="review-date"></span>
    `;
    article.querySelector("strong").textContent = y.yazar_adi + falciAdi;
    article.querySelector(".stars").textContent = yildizGoster(y.puan);
    article.querySelector("p").textContent = y.yorum;
    article.querySelector(".review-date").textContent = goreliTarih(y.created_at);

    if (mevcutOturum && mevcutOturum.user.id === y.user_id) {
      const silBtn = document.createElement("button");
      silBtn.className = "review-own-delete";
      silBtn.type = "button";
      silBtn.textContent = "Yorumunu sil";
      silBtn.addEventListener("click", async () => {
        if (!confirm("Yorumunu silmek istediğine emin misin?")) return;
        await sb.from("yorumlar").delete().eq("id", y.id);
        yorumlariYukle();
        if (window.__falappFalciYenile) window.__falappFalciYenile();
      });
      article.querySelector(".review-date").appendChild(silBtn);
    }

    if (y.admin_yanit) {
      const reply = document.createElement("div");
      reply.className = "review-reply";
      reply.innerHTML = "<strong>FalMısın ekibi:</strong><p></p>";
      reply.querySelector("p").textContent = y.admin_yanit;
      article.appendChild(reply);
    }
    return article;
  }

  async function yorumlariYukle() {
    ozetGuncelle();
    const { data, error } = await sb
      .from("yorumlar")
      .select("*, falcilar(ad)")
      .order("created_at", { ascending: false })
      .limit(30);
    reviewList.setAttribute("aria-busy", "false");
    if (error) {
      reviewList.innerHTML = '<p class="falci-loading">Yorumlar yüklenemedi, birazdan tekrar dene.</p>';
      return;
    }
    if (!data || data.length === 0) {
      reviewList.innerHTML = '<p class="falci-loading">Henüz yorum yok, ilk yorumu sen yaz.</p>';
      return;
    }
    reviewList.innerHTML = "";
    data.forEach((y) => reviewList.appendChild(yorumKartiOlustur(y)));
  }

  async function falciSecenekleriniDoldur() {
    const { data } = await sb.from("falcilar").select("id, ad").eq("aktif", true).order("sira", { ascending: true });
    reviewFalciId.innerHTML = '<option value="">Seç...</option>';
    (data || []).forEach((f) => {
      const opt = document.createElement("option");
      opt.value = f.id;
      opt.textContent = f.ad;
      reviewFalciId.appendChild(opt);
    });
  }

  reviewLoginBtn.addEventListener("click", () => {
    const authOpenBtn = document.getElementById("authOpenBtn");
    if (authOpenBtn) authOpenBtn.click();
  });

  reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!mevcutOturum) return;
    mesajGoster(reviewMsg, "Gönderiliyor...");
    const adSoyad = mevcutOturum.user.user_metadata && mevcutOturum.user.user_metadata.full_name;
    const { error } = await sb.from("yorumlar").insert({
      falci_id: reviewFalciId.value || null,
      user_id: mevcutOturum.user.id,
      yazar_adi: adSoyadKisalt(adSoyad),
      puan: Number(reviewPuan.value),
      yorum: reviewYorum.value.trim()
    });
    if (error) {
      mesajGoster(reviewMsg, "Gönderilemedi: " + error.message, "error");
      return;
    }
    mesajGoster(reviewMsg, "Teşekkürler, yorumun eklendi!", "ok");
    reviewForm.reset();
    yorumlariYukle();
    if (window.__falappFalciYenile) window.__falappFalciYenile();
  });

  function oturumDurumunuUygula(session) {
    mevcutOturum = session;
    if (session && session.user) {
      reviewLoginHint.hidden = true;
      reviewForm.hidden = false;
      falciSecenekleriniDoldur();
    } else {
      reviewLoginHint.hidden = false;
      reviewForm.hidden = true;
    }
    yorumlariYukle();
  }

  sb.auth.onAuthStateChange((_event, session) => oturumDurumunuUygula(session));
  sb.auth.getSession().then(({ data }) => oturumDurumunuUygula(data.session));
})();
