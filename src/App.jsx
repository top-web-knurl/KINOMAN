import { Header } from './UI/Header/Header';
import { Logo } from './UI/Logo/Logo';
import { MoveGrid } from './components/MoveGrid/MoveGrid';
import 'materialize-css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header>
        <div className='col s6'>
          <Logo>KINOMAN</Logo>
        </div>
        <div className='col s6'>
          <input type="search" placeholder='Поиск' />
        </div>
      </Header>
      <MoveGrid/>
    </div>
  );
}

export default App;
