import { useContext, useState } from "react";
import { ListaDeNotasContext } from "../../context/ListaDeNotas";

const Form = () => {
  const { criarNota, excluirNota, editarNota, aviso } =
    useContext(ListaDeNotasContext);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [id, setId] = useState(0);

  return (
    <form>
      <label>Digite seu Título:</label>
      <input
        type="text"
        name="titulo"
        required
        onChange={event => {
          setTitulo(event.target.value);
        }}
      />
      <label>Digite sua descrição:</label>
      <textarea
        name="descricao"
        required
        onChange={event => {
          setDescricao(event.target.value);
        }}
      />
      <label>Digite id da Nota</label>
      <input
        type="number"
        name="id"
        onChange={event => {
          setId(event.target.value);
        }}
      />
      <span>{aviso}</span>
      <button
        onClick={event => {
          event.preventDefault();
          criarNota(titulo, descricao, id);
        }}
      >
        Criar Nota
      </button>
    </form>
  );
};

export default Form;
