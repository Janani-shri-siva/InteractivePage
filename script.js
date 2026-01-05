// Dropdown Interaction
const languageSelect = document.getElementById("languageSelect");
const dropdownResult = document.getElementById("dropdownResult");

languageSelect.addEventListener("change", function () {
    if (this.value !== "") {
        dropdownResult.textContent = `You selected: ${this.value}`;
    } else {
        dropdownResult.textContent = "";
    }
});

// Modal Logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    form.reset();
});
