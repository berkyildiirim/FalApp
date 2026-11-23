(function () {
  if (typeof window.supabase === "undefined") {
    document.body.innerHTML = "<p style='padding:40px;color:#fff;font-family:sans-serif;'>Bağlantı kurulamadı, sayfayı yenile.</p>";
    return;
  }
  const sb = window.supabase.createClient(FALAPP_SUPABASE_URL, FALAPP_SUPABASE_ANON_KEY);

  const loginSection = document.getElementById("adminLoginSection");
  const deniedSection = document.getElementById("adminDeniedSection");
  const dashboard = document.getElementById("adminDashboard");
  const adminWhoami = document.getElementById("adminWhoami");
  const adminLogoutBtn = document.getElementById("adminLogoutBtn");

  const loginForm = document.getElementById("adminLoginForm");
  const loginMsg = document.getElementById("adminLoginMsg");

  const falciForm = document.getElementById("falciForm");
  const falciFormBaslik = document.getElementById("falciFormBaslik");
  const falciFormMsg = document.getElementById("falciFormMsg");
  const falciKaydetBtn = document.getElementById("falciKaydetBtn");
  const falciVazgecBtn = document.getElementById("falciVazgecBtn");
  const falciTableBody = document.getElementById("falciTableBody");
  const uyeTableBody = document.getElementById("uyeTableBody");

  function bolumGoster(bolum) {
    loginSection.hidden = bolum !== "login";
    deniedSection.hidden = bolum !== "denied";
    dashboard.hidden = bolum !== "dashboard";
    adminLogoutBtn.hidden = bolum !== "dashboard";
  }

  function mesajGoster(el, metin, tur) {
    el.textContent = metin;
    el.classList.remove("error", "ok");
    if (tur) el.classList.add(tur);
  }

  async function girisKontrolEt() {
    const { data: { session } } = await sb.auth.getSession();
    if (!session || !session.user) {
      adminWhoami.textContent = "";
      bolumGoster("login");
      return;
    }
    const { data: profil } = await sb.from("profiles").select("is_admin, full_name, email").eq("id", session.user.id).maybeSingle();
    if (!profil || !profil.is_admin) {
      bolumGoster("denied");
      return;
    }
    adminWhoami.textContent = profil.full_name || profil.email || session.user.email;
    bolumGoster("dashboard");
    falcilariYukle();
    uyeleriYukle();
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    mesajGoster(loginMsg, "Giriş yapılıyor...");
    const email = document.getElementById("adminEmail").value.trim();
    const password = document.getElementById("adminPassword").value;
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      mesajGoster(loginMsg, "Giriş başarısız: e-posta ya da şifre hatalı.", "error");
      return;
    }
    mesajGoster(loginMsg, "");
    girisKontrolEt();
  });

  adminLogoutBtn.addEventListener("click", async () => {
    await sb.auth.signOut();
    girisKontrolEt();
  });

  // ===== Falcı formu =====
  function formuTemizle() {
    falciForm.reset();
    document.getElementById("falciId").value = "";
    document.getElementById("falciPuan").value = "5.0";
    document.getElementById("falciDeneyim").value = "1";
    document.getElementById("falciYorumSayisi").value = "0";
    document.getElementById("falciAvatarHue").value = "0";
    document.getElementById("falciLink").value = "https://wa.me/905555555555";
    document.getElementById("falciButonMetni").value = "Yaz";
    document.getElementById("falciSira").value = "0";
    falciFormBaslik.textContent = "Yeni falcı ekle";
    falciKaydetBtn.textContent = "Ekle";
    falciVazgecBtn.hidden = true;
    mesajGoster(falciFormMsg, "");
  }

  falciVazgecBtn.addEventListener("click", formuTemizle);

  function formuDoldur(f) {
    document.getElementById("falciId").value = f.id;
    document.getElementById("falciAd").value = f.ad || "";
    document.getElementById("falciUzmanlik").value = f.uzmanlik || "";
    document.getElementById("falciDeneyim").value = f.deneyim_yili || 0;
    document.getElementById("falciPuan").value = f.puan || 5.0;
    document.getElementById("falciYorumSayisi").value = f.yorum_sayisi || 0;
    document.getElementById("falciDurum").value = f.durum || "musait";
    document.getElementById("falciBeklemeNotu").value = f.bekleme_notu || "";
    document.getElementById("falciAvatarKisaltma").value = f.avatar_kisaltma || "";
    document.getElementById("falciAvatarHue").value = f.avatar_hue || 0;
    document.getElementById("falciLink").value = f.iletisim_link || "";
    document.getElementById("falciButonMetni").value = f.buton_metni || "Yaz";
    document.getElementById("falciSira").value = f.sira || 0;
    falciFormBaslik.textContent = "Falcıyı düzenle: " + f.ad;
    falciKaydetBtn.textContent = "Güncelle";
    falciVazgecBtn.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  falciForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.getElementById("falciId").value;
    const kayit = {
      ad: document.getElementById("falciAd").value.trim(),
      uzmanlik: document.getElementById("falciUzmanlik").value.trim(),
      deneyim_yili: Number(document.getElementById("falciDeneyim").value) || 0,
      puan: Number(document.getElementById("falciPuan").value) || 5.0,
      yorum_sayisi: Number(document.getElementById("falciYorumSayisi").value) || 0,
      durum: document.getElementById("falciDurum").value,
      bekleme_notu: document.getElementById("falciBeklemeNotu").value.trim() || null,
      avatar_kisaltma: document.getElementById("falciAvatarKisaltma").value.trim().toUpperCase(),
      avatar_hue: Number(document.getElementById("falciAvatarHue").value) || 0,
      iletisim_link: document.getElementById("falciLink").value.trim(),
      buton_metni: document.getElementById("falciButonMetni").value.trim(),
      sira: Number(document.getElementById("falciSira").value) || 0
    };

    mesajGoster(falciFormMsg, "Kaydediliyor...");
    let hata;
    if (id) {
      ({ error: hata } = await sb.from("falcilar").update(kayit).eq("id", id));
    } else {
      ({ error: hata } = await sb.from("falcilar").insert(kayit));
    }
    if (hata) {
      mesajGoster(falciFormMsg, "Kaydedilemedi: " + hata.message, "error");
      return;
    }
    mesajGoster(falciFormMsg, "Kaydedildi!", "ok");
    formuTemizle();
    falcilariYukle();
  });

  async function falcilariYukle() {
    const { data, error } = await sb.from("falcilar").select("*").order("sira", { ascending: true });
    if (error) {
      falciTableBody.innerHTML = '<tr><td colspan="6">Yüklenemedi: ' + error.message + '</td></tr>';
      return;
    }
    if (!data || data.length === 0) {
      falciTableBody.innerHTML = '<tr><td colspan="6">Henüz falcı eklenmemiş.</td></tr>';
      return;
    }
    falciTableBody.innerHTML = "";
    data.forEach((f) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td></td>
        <td></td>
        <td>${f.durum === "musait" ? "Müsait" : "Meşgul"}${f.aktif ? "" : " · gizli"}</td>
        <td>${f.puan}</td>
        <td>${f.sira}</td>
        <td class="admin-row-actions">
          <button class="admin-link-btn" data-aksiyon="duzenle">Düzenle</button>
          <button class="admin-link-btn" data-aksiyon="gizle">${f.aktif ? "Gizle" : "Göster"}</button>
          <button class="admin-link-btn danger" data-aksiyon="sil">Sil</button>
        </td>
      `;
      tr.children[0].textContent = f.ad;
      tr.children[1].textContent = f.uzmanlik;
      tr.querySelector('[data-aksiyon="duzenle"]').addEventListener("click", () => formuDoldur(f));
      tr.querySelector('[data-aksiyon="gizle"]').addEventListener("click", async () => {
        await sb.from("falcilar").update({ aktif: !f.aktif }).eq("id", f.id);
        falcilariYukle();
      });
      tr.querySelector('[data-aksiyon="sil"]').addEventListener("click", async () => {
        if (!confirm(f.ad + " silinsin mi? Bu işlem geri alınamaz.")) return;
        await sb.from("falcilar").delete().eq("id", f.id);
        falcilariYukle();
      });
      falciTableBody.appendChild(tr);
    });
  }

  async function uyeleriYukle() {
    const { data, error } = await sb.from("profiles").select("*").order("created_at", { ascending: false });
    if (error) {
      uyeTableBody.innerHTML = '<tr><td colspan="3">Yüklenemedi: ' + error.message + '</td></tr>';
      return;
    }
    if (!data || data.length === 0) {
      uyeTableBody.innerHTML = '<tr><td colspan="3">Henüz üye yok.</td></tr>';
      return;
    }
    uyeTableBody.innerHTML = "";
    data.forEach((u) => {
      const tr = document.createElement("tr");
      const tarih = u.created_at ? new Date(u.created_at).toLocaleDateString("tr-TR") : "-";
      tr.innerHTML = `<td></td><td></td><td>${tarih}</td>`;
      tr.children[0].textContent = u.full_name || "-";
      tr.children[1].textContent = u.email || "-";
      uyeTableBody.appendChild(tr);
    });
  }

  sb.auth.onAuthStateChange(() => girisKontrolEt());
  girisKontrolEt();
})();
