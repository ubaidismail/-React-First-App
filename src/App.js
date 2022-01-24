  import './App.css';
import HEADER from './MyComponents/header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
  let todos = [
    {
        sno: 1,
        title: "Go to the market",
        Desc: "You need bla bla bla",
    },
    {
      sno: 2,
      title: "Go to the shop",
      Desc: "You need bla bla bla",
  },
  {
    sno: 3,
    title: "Go to the office",
    Desc: "You need bla bla bla",
}
  ]
  return (
    <>
      <HEADER title="My Todo's List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
