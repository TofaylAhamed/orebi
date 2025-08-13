import './App.css';
import Home from './components/Pages/Home';
import RootLayout from './components/Layouts/RootLayout';
import {Routes,Route,} from 'react-router-dom';
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';
import Contract from './components/Pages/Contract';
import Jounal from './components/Pages/Jounal';
import Error from './components/Pages/Error';

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
