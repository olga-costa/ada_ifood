const getLocalStorage = (key) => {
    const storageItemValue = localStorage.getItem(key)
    try {
        return JSON.parse(storageItemValue)
    } catch (error) {
        return storageItemValue
    }
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

const removeLocalStorage = (key) => {
    localStorage.removeItem(key)
}

const clearLocalStorage = () => {
    localStorage.clear()
}