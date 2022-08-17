import { Header } from './UI/Header/Header';
import { MoveGrid } from './components/MoveGrid/MoveGrid';
import { Routes, Route, Link } from "react-router-dom";
import { MovePage } from './components/MovePage/MovePage';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MoveGrid />} />
        <Route path="/:id" element={<MovePage />} />
      </Routes>
    </div>
  );
}

export default App;
