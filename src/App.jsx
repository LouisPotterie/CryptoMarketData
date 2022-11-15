import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import CryptoDetail from './pages/CryptoDetail'
import DeFiOverview from './pages/DeFiOverview'
import PriceOverview from './pages/PriceOverview'
import StablecoinOverview from './pages/StablecoinOverview'
import NftOverview from './pages/NftOverview'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PriceOverview/>}/>
        <Route path="/coin/:id" element={<CryptoDetail/>}/>
        <Route path="/defi" element={<DeFiOverview/>}/>
        <Route path="/stablecoins" element={<StablecoinOverview/>}/>
        <Route path="/nft" element={<NftOverview/>}/>
      </Routes>
      </BrowserRouter>
    
      
    </div>
  )
}

export default App
