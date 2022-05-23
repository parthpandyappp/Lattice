import { Routes } from "./routes"
import { Nav, Footer } from "./components"

function App() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Nav />
      <Routes />
      <Footer />
    </div>
  )
}
export default App;
