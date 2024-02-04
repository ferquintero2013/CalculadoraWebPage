import React from 'react';
import { Calcular } from './Calcular';
import { IngresarValores } from './IngresarValores';
import { BotonSumar } from './BotonSumar';

function App() {
  const [enterValues1, setEnterValues1] = React.useState("");
  const [enterValues2, setEnterValues2] = React.useState("");
  console.log("valor 1: " + enterValues1);
  console.log("valor 2: " + enterValues2);

  return (
    <React.Fragment>
      <Calcular valor1={enterValues1} valor2={enterValues2}/>
      <IngresarValores
        enterValues1 = {enterValues1}
        setEnterValues1 = {setEnterValues1}
        enterValues2 = {enterValues2}
        setEnterValues2 = {setEnterValues2}
      />
      <BotonSumar/>
    </React.Fragment>
  );
}


export default App;
