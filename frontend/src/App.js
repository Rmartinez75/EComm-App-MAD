
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import VestPage from './components/pages/VestPage';
import './index.css';
import VestPageMobile from './components/vest-comps/VestPageMobile';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/vest' element={<VestPage />} />
          <Route path='/vestPageMobile' element={<VestPageMobile />} />
      </Routes>
    </div>
  );
}

export default App;
