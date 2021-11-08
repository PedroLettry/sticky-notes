import Form from "./components/form/Form";
import ListaDeNotas from "./context/ListaDeNotas";

function App() {
  return (
    <div className="App">
      <ListaDeNotas>
        <Form />
      </ListaDeNotas>
    </div>
  );
}

export default App;
