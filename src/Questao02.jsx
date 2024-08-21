import React, { useState } from 'react';

// Utiliza o estado para alternar entre a imagem de frente e costas de Pikachu
const Questao02 = () => {
  const [isFront, setIsFront] = useState(true);

      // Alterna entre frente e costas
  const toggleImage = () => {
    setIsFront(!isFront);
  };

    // Exibe a imagem de Pikachu e um botão para alternar entre frente e costas
  return (
    <div className="text-center">
      <img
        src={
          isFront
            ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
        }
        alt="Pikachu"
      />
      <button onClick={toggleImage}>
        {isFront ? 'Mostrar Costas' : 'Mostrar Frente'}
      </button>
    </div>
  );
};

export default Questao02;