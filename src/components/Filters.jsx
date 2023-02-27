import React, { useContext, useState } from 'react';
import Mycontext from '../context/myContext';

export default function Filters() {
  const [filtroRefeicao, setRefeicao] = useState('');
  const [dataFiltro, setDataFiltro] = useState('');

  const {
    setFiltro, arrayCalorias,
  } = useContext(Mycontext);

  const filters = () => {
    const filtro = arrayCalorias.filter(({ refeicao, data }) => refeicao === filtroRefeicao
    && data === dataFiltro);
    return setFiltro(filtro);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFiltro();
  };

  return (
    <form className="flex">

      <label className="flex flex-column" htmlFor="meal">
        Refeição
        <select
          id="meal"
          defaultValue=""
          onChange={({ target }) => {
            setRefeicao(target.value);
          }} // sua lógica...
        >
          <option value="">Todas as refeições</option>
          <option value="Café da manhã">Café da manhã</option>
          <option value="Lanche da manhã">Lanche da manhã</option>
          <option value="Almoço">Almoço</option>
          <option value="Lanche da tarde">Lanche da tarde</option>
          <option value="Janta">Janta</option>
          <option value="Ceia">Ceia</option>
        </select>
      </label>

      <label className="flex flex-column" htmlFor="date">
        Data
        <input
          id="date"
          type="date"
          onChange={({ target }) => {
            setDataFiltro(target.value);
          }} // sua lógica...
        />
      </label>

      <button
        type="button"
        onClick={() => { handleSubmit(); }} // sua lógica...
      >
        Limpar Filtros
      </button>
    </form>
  );
}
