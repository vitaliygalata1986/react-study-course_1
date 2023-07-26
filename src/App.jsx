import './App.css';
import Book from './components/Book';
import Preloader from './components/Preloader';

function App({ isLoading }) {
  return isLoading ? (
    <Preloader />
  ) : (
    <div>
      <Book name="JS" year="2023" price="10000" />
      <Book name="PHP" year="2022" price="15000" />
      <Book name="React" year="2021" price="13000" />
    </div>
  );
}

export default App;
