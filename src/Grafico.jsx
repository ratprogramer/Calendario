import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los componentes que se usarán de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Datos de las regiones y el dinero recaudado
  const data = {
    labels: ['Antioquia', 'Cundinamarca', 'Valle', 'Caldas', 'Atlántico'], // Regiones
    datasets: [
      {
        label: 'Dinero Recaudado (COP)',
        data: [5000000, 3000000, 2000000, 1500000, 1000000], // Valores para cada región
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',  // Rojo para Antioquia
          'rgba(54, 162, 235, 0.6)',  // Azul para Cundinamarca
          'rgba(255, 206, 86, 0.6)',  // Amarillo para Valle
          'rgba(75, 192, 192, 0.6)',  // Verde para Caldas
          'rgba(153, 102, 255, 0.6)', // Morado para Atlántico
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Dinero Recaudado por Región</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;