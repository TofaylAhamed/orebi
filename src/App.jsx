import './App.css';
import Home from './Components/Pages/Home';
import RootLayout from './Components/Layouts/RootLayout';
import {Routes,Route,} from 'react-router-dom';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Contract from './Components/Pages/Contract';
import Jounal from './Components/Pages/Jounal';
import Error from './Components/Pages/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="Contract" element={<Contract/>}/>
        <Route path="Jounal" element={<Jounal/>}/>
        <Route path="*" element={<Error/>}/>
        <Route/>
        </Route>
      </Routes>
    </>
  )
}
export default App
