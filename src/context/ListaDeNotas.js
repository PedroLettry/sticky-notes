import { createContext, useState } from "react";

export const ListaDeNotasContext = createContext();

const ListaDeNotas = () => {
  [arrayNotas, setArrayNotas] = useState([]);

  criarNota = (titulo, descricao) => {
    setArrayNotas([...arrayNotas, { titulo, descricao }]);
  };

  return (
    <ListaDeNotasContext.Provider value={{}}></ListaDeNotasContext.Provider>
  );
};

export default ListaDeNotas;
