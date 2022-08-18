import { Header } from './components/UI/Header/Header';
import { MovieGrid } from './components/MovieGrid/MovieGrid';
import { Routes, Route } from "react-router-dom";
import { MoviePage } from './components/MoviePage/MoviePage';
import './App.scss';
import { Wrapper } from './components/UI/Wrapper/Wrapper';
function App() {
  return (
    <div className="App">

      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<MovieGrid />} />
          <Route path="/:id" element={<MoviePage />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
