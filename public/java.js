const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        if (index === 0) window.location.href = "sto.html";
        if (index === 1) window.location.href = "proverbs.html";
        if (index === 2) window.location.href = "media.html";
        if (index === 3) window.location.href = "school-culture.html";
    });
});