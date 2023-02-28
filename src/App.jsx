import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductOverview from "./pages/ProductOverview"
import ProductDetails from "./pages/ProductDetails"
import RandomBeerPage from "./pages/RandomBeerPage"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productoverview' element={<ProductOverview />}/>
        <Route path='/productdetails/:id' element={<ProductDetails />}/>
        <Route path='/randombeer' element={<RandomBeerPage />}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App