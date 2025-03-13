import { Header } from "./components/header"
import { Automovil } from "./components/Automovil"

import { useCart } from "./hooks/useCart.jsx"
function App() {

  const {
    data,
    card,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    cartTotal

  } = useCart()
  return (
    <>
      <Header
        card={card}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        cartTotal={cartTotal}

      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Automoviles disponibles</h2>
        <div className="row mt-5">
          {data.map((automovil) => (
            <Automovil
              key={automovil.id}
              automovil={automovil}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="mt-5 py-5">
        <div className="container-xl">
          <p className="text-center fs-6 mt-4 m-md-0 text-muted"> 2024 Super Carros, Inc</p>
        </div>
      </footer>
    </>
  )
}

export default App
