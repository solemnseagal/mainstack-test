const getFromStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : ""
}

const removeFromStorage = (key: string) => {
  return localStorage.getItem(key) ? localStorage.removeItem(key) : false
}

const saveToStorage = (key: string, value: string | any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const queriesParam = (paramsObj: any) => {
  return (Object.keys(paramsObj).map((key: string) => encodeURIComponent(key) + '=' + encodeURIComponent(paramsObj[key])).join('&'))
}


export {
  getFromStorage,
  removeFromStorage,
  saveToStorage,
  queriesParam,
}

