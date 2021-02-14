import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key)
    const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
