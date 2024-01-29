function refresh() {
  var thehtml = document.getElementById("thehtml");
  var thecss = document.getElementById("thecss");
  var output = document.getElementById("output-area");
  output.innerHTML = `${thehtml.value}`;
  let heads = document.head;
  let styles = `<style>${thecss.value}</style>`;
  heads.insertAdjacentHTML("beforeend", styles);
}

setInterval(() => {
  let btn = document.getElementById("screen-bottom");
  let colorR = Math.floor(Math.random() * 255);
  let colorG = Math.floor(Math.random() * 255);
  let colorB = Math.floor(Math.random() * 255);
  btn.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB}`;
}, 1500);
