import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'

const STORAGE_KEY = 'raafx-theme'
const ThemeContext = createContext(null)

function getInitialTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'night' ? 'night' : 'light'
  } catch (error) {
    console.error('Unable to read the saved theme preference.', error)
    return 'light'
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (error) {
      console.error('Unable to save the theme preference.', error)
    }
  }, [theme])

  const value = {
    theme,
    toggleTheme: () => setTheme((current) => current === 'light' ? 'night' : 'light'),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider.')
  return context
}
