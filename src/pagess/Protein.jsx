import Chart from 'chart.js/auto'
import { sampleData } from '../data/data';

// This function handles the rendering of charts
export default (async function() {
    const data = sampleData
    new Chart(
      document.getElementById('Protein'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.day),
          datasets: [
            {
              label: 'Protein spread out to 30 days',
              data: data.map(row => row.meals.breakfast.protein)
            }
          ]
        }
      }
    );
  })();