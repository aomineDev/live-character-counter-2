const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function countLetters() {
  const textLength = this.value.length;

  count.innerText = `${textLength}`;
}

textarea.addEventListener("input", countLetters);
