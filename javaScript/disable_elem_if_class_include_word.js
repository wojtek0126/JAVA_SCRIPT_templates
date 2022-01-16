const list= document.querySelectorAll("li");
list.forEach(el => {
  if (el.className.includes("zielony")) {
    el.style.display = 'none'
  }
})