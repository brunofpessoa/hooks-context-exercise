import React, { useMemo, useState } from 'react';
import MyContext from './myContext';

function Provider({ children }) {
  const [arrayCalorias, setArray] = useState([]);
  const [arrayFiltro, setFiltro] = useState([]);

  const values = useMemo(() => ({
    arrayCalorias, setArray, arrayFiltro, setFiltro,
  }), [arrayCalorias, setArray, arrayFiltro, setFiltro]);

  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
