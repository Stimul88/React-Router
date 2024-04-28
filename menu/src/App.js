import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {DriftPage, ForzaPage, HomePage, TimeAttackPage} from "./pages";
import {Menu} from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="drift" component={DriftPage} />
            <Route path="timeattack" component={TimeAttackPage} />
            <Route path="forza" component={ForzaPage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}