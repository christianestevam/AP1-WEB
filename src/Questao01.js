import React from 'react';

// Componente Questao01A (Função Arrow)
const Questao01A = () => {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ];

  // Questao01A chama Questao01B e passa a lista como props
  return <Questao01B lista={lista} />;
};

// Componente Questao01B (Função Clássica)
function Questao01B(props) {
  return (
    <div>
      {props.lista.map((item, index) => {
        // Para cada objeto, encontra o maior valor entre a, b e c
        const maiorValor = Math.max(item.a, item.b, item.c);
        return <p key={index}>Maior valor: {maiorValor}</p>;
      })}
    </div>
  );
}

export default Questao01A;
