import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing.page';
import Bloodline from './pages/Bloodline.page';
import Jagriti from './pages/Jagriti.page';
import Escape from './pages/Escape.page';
import Disha from './pages/Disha.page';
import Umeed from './pages/Umeed.page';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/bloodline" element={<Bloodline />} />
      <Route path="/jagriti" element={<Jagriti />} />
      <Route path="/escape" element={<Escape />} />
      <Route path="/disha" element={<Disha />} />
      <Route path="/umeed" element={<Umeed />} />
    </Routes>
  );
}

export default App;
