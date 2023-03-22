import { Header } from './components/UI/Header/Header';
import { MovieGrid } from './components/MovieGrid/MovieGrid';
import { Routes, Route } from "react-router-dom";
import { MoviePage } from './components/MoviePage/MoviePage';
import { Wrapper } from './components/UI/Wrapper/Wrapper';
import { responseDb } from "./responseDb";
import './App.scss';


function App() {
  return (
    <div className="App">

      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<MovieGrid movies={responseDb} />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
