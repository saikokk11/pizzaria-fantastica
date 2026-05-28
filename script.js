const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const addButtons = document.querySelectorAll(".add-to-cart");
const supportButton = document.querySelector("#support-button");

let cartTotal = 0;

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks?.addEventListener("click", (event) => {
  const clickedLink = event.target.closest("a");

  if (!clickedLink) {
    return;
  }

  navLinks.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Abrir menu");
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".pizza-card");
    const pizzaName = card?.dataset.pizza || "Pizza";

    cartTotal += 1;
    button.textContent = "Adicionada";
    button.disabled = true;

    window.alert(`${pizzaName} foi adicionada ao carrinho. Itens: ${cartTotal}`);

    window.setTimeout(() => {
      button.textContent = "Adicionar";
      button.disabled = false;
    }, 1400);
  });
});

supportButton?.addEventListener("click", () => {
  const phone = "5511999999999";
  const message = encodeURIComponent(
    "Ola! Quero ajuda para fazer um pedido na Neon Slice."
  );
  const supportUrl = `https://wa.me/${phone}?text=${message}`;

  window.open(supportUrl, "_blank", "noopener,noreferrer");
});
