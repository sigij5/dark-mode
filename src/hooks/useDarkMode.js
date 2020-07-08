import React, {useState, useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'



export const useDarkMode = () => {
    const [storedValue, setStoredValue] = useLocalStorage('mode', '');

    useEffect(() => {
        if (storedValue === true) {
            document.body.classList.add('dark-mode')
        } if (storedValue === false) {
            document.body.classList.remove('dark-mode')
        }
    }, [storedValue]);

    return [storedValue, setStoredValue]
}