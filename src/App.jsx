import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductOverview from "./pages/ProductOverview"
import ProductDetails from "./pages/ProductDetails"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productoverview' element={<ProductOverview />}/>
        <Route path='/productdetails' element={<ProductDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App