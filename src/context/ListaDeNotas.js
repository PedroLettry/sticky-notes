import { createContext, useState } from "react";

export const ListaDeNotasContext = createContext();

const ListaDeNotas = ({ children }) => {
  const [arrayNotas, setArrayNotas] = useState([]);
  const [aviso, setAviso] = useState("");

  const criarNota = (titulo, descricao, id) => {
    let idExiste = arrayNotas.some(nota => {
      return nota.id === id;
    });

    if (idExiste) {
      setAviso("O id que você digitou existe");
      return;
    } else {
      setArrayNotas([...arrayNotas, { titulo, descricao, id }]);
    }
  };

  const excluirNota = id => {
    setArrayNotas(
      arrayNotas.filter(nota => {
        return nota.id !== id;
      })
    );
  };

  const editarNota = (id, novaNota) => {
    setArrayNotas(
      arrayNotas.map(nota => {
        const notaAtualizada = { ...nota };
        if (notaAtualizada.id === id) {
          notaAtualizada = { ...notaAtualizada, ...novaNota };
        }
        return notaAtualizada;
      })
    );
  };

  return (
    <ListaDeNotasContext.Provider
      value={{ criarNota, excluirNota, editarNota, aviso }}
    >
      {children}
    </ListaDeNotasContext.Provider>
  );
};

export default ListaDeNotas;
