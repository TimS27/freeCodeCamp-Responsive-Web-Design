function openNav() {
  document.getElementById("navbar").style.display = "flex";
  document.getElementById("main-doc").style.paddingLeft = "245px";
  document.getElementById("openbtn").style.display = "flex";
  document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("main-doc").style.paddingLeft = "10px";
  document.getElementById("openbtn").style.display = "flex";
}