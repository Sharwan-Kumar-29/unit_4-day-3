let text_area_input = document.getElementById("text-analyzer");

let output_area = document.getElementById("output-text-area");

document.getElementById("count-words").addEventListener("click", () => {
  let ans = text_area_input.value.trim().split(" ").length;
  if (text_area_input.value == "") {
    ans = 0;
  }
  output_area.innerText = `Number of Words: ${ans}`;
  output_area.style.fontSize = "20px";
  output_area.style.fontWeight = "600";
  output_area.style.fontFamily = "Arial, Helvetica, sans-serif";
});

document
  .getElementById("convert-to-lowercase")
  .addEventListener("click", () => {
    let ans = text_area_input.value.toLowerCase();
    if (ans == "") return;
    output_area.innerText = ans;
    output_area.style.fontSize = "16px";
    output_area.style.fontWeight = "500";
    output_area.style.fontFamily = "Arial, Helvetica, sans-serif";
  });

document
  .getElementById("convert-to-uppercase")
  .addEventListener("click", () => {
    let ans = text_area_input.value.toUpperCase();
    if (ans == "") return;
    output_area.innerText = ans;
  });

document.getElementById("search-substring").addEventListener("click", () => {
  let substring = document.getElementById("substring-input").value;

  let text_value = text_area_input.value;

  let escapeSearchString = substring.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let regex = new RegExp(escapeSearchString, "gi");

  let highlighted = text_value.replace(
    regex,
    (match) => `<span class="highlight">${match}</span>`
  );
  output_area.innerHTML = highlighted;
});

document.getElementById("clear-text-area").addEventListener("click", ()=>{
  text_area_input.value = ""
})