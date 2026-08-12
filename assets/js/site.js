(function () {
  "use strict";

  const toggler = document.querySelector("[data-nav-toggle]");
  const navCollapse = document.getElementById("main-nav");
  if (toggler && navCollapse) {
    toggler.addEventListener("click", () => {
      navCollapse.classList.toggle("show");
    });
  }

  document.querySelectorAll(".has-dropdown > .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  const goTop = document.querySelector(".go-top");
  if (goTop) {
    window.addEventListener("scroll", () => {
      goTop.classList.toggle("active", window.scrollY > 300);
    });
    goTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  document.querySelectorAll(".popup-btn").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && /\.(jpg|jpeg|png|webp)$/i.test(href)) {
        e.preventDefault();
        window.open(href, "_blank");
      }
    });
  });

  const form = document.querySelector('form[action*="formspree.io"]');
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const alert = document.getElementById("form-alert");
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      btn.disabled = true;
      btn.textContent = "Enviando...";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          if (alert) {
            alert.className = "alert alert-success";
            alert.textContent = "Mensaje enviado con éxito. Pronto nos comunicaremos.";
            alert.classList.remove("d-none");
          }
          form.reset();
        } else {
          throw new Error("Error al enviar");
        }
      } catch {
        if (alert) {
          alert.className = "alert alert-danger";
          alert.textContent = "No se pudo enviar el mensaje. Intente de nuevo o escríbanos por WhatsApp.";
          alert.classList.remove("d-none");
        }
      } finally {
        btn.disabled = false;
        btn.textContent = originalText;
      }
    });
  }
})();
