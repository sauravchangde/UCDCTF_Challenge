import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome.js';
import Level_1 from './components/level_1/level_1.js';
import Level_2 from './components/level_2/level_2.js';
import Level_3 from './components/level_3/level_3.js';
import Level_4 from './components/level_4/level_4.js';
import Level_5 from './components/level_5/level_5.js';
import Error_Page from './components/errorpage/errorpage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Welcome />}>
      </Route>
      <Route path="/level1" element={<Level_1 />}>
      </Route>
      <Route path="/level2" element={<Level_2 />}>
      </Route>
      <Route path="/level3" element={<Level_3 />}>
      </Route>
      <Route path="/level4" element={<Level_4 />}>
      </Route>
      <Route path="/level5" element={<Level_5 />}>
      </Route>
      <Route path="/errorpage" element={<Error_Page />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
