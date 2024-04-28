import {Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import {DriftPage, ForzaPage, HomePage, TimeAttackPage} from "./pages";
import {Menu} from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}