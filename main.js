// Smooth scroll
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth"
        });
    }
}
// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
};
