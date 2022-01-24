  import './App.css';
import HEADER from './MyComponents/header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
  return (
    <>
      <HEADER title="My Todo's List"/>
      <Todos />
      <Footer />
    </>
  );
}

export default App;
