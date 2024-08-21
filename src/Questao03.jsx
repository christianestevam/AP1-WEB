import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  const [capitais, setCapitais] = useState({ menor: '', maior: '' });

  useEffect(() => {
    const fetchCapitais = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population');
        const data = await response.json();

        // Ordena os dados por população
        const sortedData = data.sort((a, b) => a.population - b.population);

        // Atualiza o estado com a capital de menor e maior população
        setCapitais({
          menor: sortedData[0].capital[0],
          maior: sortedData[sortedData.length - 1].capital[0],
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchCapitais();
  }, []);

  // Exibe a capital com menor e maior população
  return (
    <div>
      <p>Capital com menor população: {capitais.menor}</p>
      <p>Capital com maior população: {capitais.maior}</p>
    </div>
  );
};

export default Questao03;
