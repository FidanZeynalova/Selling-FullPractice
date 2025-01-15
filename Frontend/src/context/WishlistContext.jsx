import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const favoritesContext = createContext()

function WishlistContextProvider({ children }) {
  let local = JSON.parse(localStorage.getItem("favorites"))
  let [favorites, setFavorites] = useState(local ? local : [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  let value = {
    favorites, setFavorites
  }
  return (
    <favoritesContext.Provider value={value}>
      {children}
    </favoritesContext.Provider>
  )
}

export default WishlistContextProvider
