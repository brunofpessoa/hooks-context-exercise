import React, { useContext, useState } from 'react';
import Mycontext from '../context/myContext';

export default function Form() {
  const [calorias, setCalorias] = useState('');
  const [data, setData] = useState('');
  const [refeicao, setRefeicao] = useState('');
  const {
    setArray, arrayCalorias,
  } = useContext(Mycontext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setArray([...arrayCalorias, { calorias, data, refeicao }]);
  };

  return (
    <form className="flex">
      <label className="flex flex-column" htmlFor="meal">
        <span>
          Refeição
          <span className="red">*</span>
        </span>
        <select
          id="meal"
          defaultValue="Café da manhã"
          onChange={({ target }) => {
            setRefeicao(target.value);
          }} // sua lógica...
        >
          <option value="Café da manhã">Café da manhã</option>
          <option value="Lanche da manhã">Lanche da manhã</option>
          <option value="Almoço">Almoço</option>
          <option value="Lanche da tarde">Lanche da tarde</option>
          <option value="Janta">Janta</option>
          <option value="Ceia">Ceia</option>
        </select>
      </label>

      <label className="flex flex-column" htmlFor="calories">
        <span>
          Calorias
          <span className="red">*</span>
        </span>
        <input
          id="calories"
          type="number"
          placeholder="ex: 400"
          onChange={({ target }) => {
            setCalorias(target.value);
          }} // sua lógica...
        />
      </label>

      <label className="flex flex-column" htmlFor="date">
        <span>
          Data
          <span className="red">*</span>
        </span>
        <input
          id="date"
          type="date"
          onChange={({ target }) => {
            setData(target.value);
          }} // sua lógica...
        />
      </label>

      <button
        type="submit"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </form>
  );
}
