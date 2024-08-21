import React, { useEffect, useState } from 'react';

const Questao04 = () => {
  const [capitais, setCapitais] = useState({ menor: '', maior: '' });



  // A função getCapitais retorna uma Promise que resolve com um array de objetos
  useEffect(() => {
    const getCapitais = () => {
      return new Promise((resolve, reject) => {
        resolve([
          { capital: ['Dublin'], population: 4994724 },
          { capital: ['Nicosia'], population: 1207361 },
          { capital: ['Madrid'], population: 47351567 }
        ]);
      });
    };

    const fetchCapitais = async () => {
      try {
        const data = await getCapitais();

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

  return (
    <div>
      <p>Capital com menor população: {capitais.menor}</p>
      <p>Capital com maior população: {capitais.maior}</p>
    </div>
  );
};

export default Questao04;
