export function footerComponent() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<h2>Tienda de abarrotes</h2>";
  footer.innerHTML += "<p>2025</p>";
  footer.style.border = "solid 3px black";
  footer.style.padding = "12px";

  return footer;
}
