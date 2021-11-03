import { createContext, useState } from "react";

export const ListaDeNotasContext = createContext();

const ListaDeNotas = () => {
  [arrayNotas, setArrayNotas] = useState([]);

  criarNota = (titulo, descricao) => {
    setArrayNotas([...arrayNotas, { titulo, descricao }]);
  };

  excluirNota = (id) => {
    setArrayNotas(
      arrayNotas.filter((nota) => {
        return nota.id != id;
      })
    );
  };

  editarNota = (id, novaNota) => {
    setArrayNotas(
      arrayNotas.map((nota) => {
        const notaAtualizada = { ...nota };
        if (notaAtualizada.id == id) {
          notaAtualizada = { ...notaAtualizada, ...novaNota };
        }
        return notaAtualizada;
      })
    );
  };

  return (
    <ListaDeNotasContext.Provider
      value={{ criarNota, excluirNota, editarNota }}
    ></ListaDeNotasContext.Provider>
  );
};

export default ListaDeNotas;
