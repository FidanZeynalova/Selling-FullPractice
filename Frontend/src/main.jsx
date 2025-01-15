import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/Slice.js'
import WishlistContextProvider from './context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <WishlistContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </WishlistContextProvider>
)
