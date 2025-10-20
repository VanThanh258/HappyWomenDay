onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const params = new URLSearchParams(window.location.search);

// Lấy giá trị của param "img"
const newSrc = params.get("img");

// Nếu có param img -> thay src của thẻ img
if (newSrc) {
  const img = document.getElementById("dynamic-image");
  img.src = newSrc;
}
