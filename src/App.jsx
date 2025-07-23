import { CartProvider } from "./context/CartContext"
import CartLists from "./components/CartLists"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <CartProvider>
      <ThemeProvider>
        <CartLists />
      </ThemeProvider>
    </CartProvider>
  )
}

export default App

