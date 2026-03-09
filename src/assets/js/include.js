const includes = document.querySelectorAll("[data-include]");

// Loop through each element with the data-include attribute, fetch the content of the specified file, and insert it into the element
includes.forEach(async (el) => {
  const file = el.getAttribute("data-include");
  const res = await fetch(file);
  el.innerHTML = await res.text();
});
