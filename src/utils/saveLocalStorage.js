function saveInLocalStorage(type, data) {
  if (data) localStorage.setItem(type, JSON.stringify(data));
}

function getFromLocalStorage(type) {
  if (localStorage.getItem(type)) {
    const savedData = localStorage.getItem(type);
    return JSON.parse(savedData);
  }
  return {};
}

export {saveInLocalStorage, getFromLocalStorage}