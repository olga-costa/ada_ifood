export const useLocalStorage = () => {
    const get = (key) => {
        return localStorage.getItem(key)
    }
    const set = (key, value) => {
        return localStorage.setItem(key, value)
    }
    const remove = (key) => {
        return localStorage.removeItem(key)
    }
    const clear = () => localStorage.clear()

    return {
        get,
        set,
        remove,
        clear
    }
}