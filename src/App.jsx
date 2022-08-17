import { Header } from './UI/Header/Header';
import { MovieGrid } from './components/MovieGrid/MovieGrid';
import { Routes, Route } from "react-router-dom";
import { MoviePage } from './components/MoviePage/MoviePage';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
