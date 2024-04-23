function localWrite(list) {
  localStorage.setItem("LocalList", JSON.stringify(list));
}

function localRead() {
  return JSON.parse(localStorage.getItem("LocalList")) || [];
}

export { localRead, localWrite };
