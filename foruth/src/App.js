import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


import About1 from './pages/About1';

import Home1 from './pages/Home1';
import Navbar from './component/Navbar';
import SingleRecipeapp from './SingleRecipeapp';



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/home"  element={<Home1 />} />
  <Route path="/about" element={<About1 />} />
  <Route path="/single" element={<SingleRecipeapp/>}/>
</Routes>
</BrowserRouter>
   
     
    </div>
  );
}

export default App;
