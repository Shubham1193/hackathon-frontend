import Chart from 'chart.js/auto'
import { sampleData } from '../hooks/data';

// This function handles the rendering of charts
export default (async function() {
    const data = sampleData
    new Chart(
      document.getElementById('acquisitions'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.day),
          datasets: [
            {
              label: 'Acquisitions by day',
              data: data.map(row => row.meals.breakfast.calories)
            }
          ]
        }
      }
    );
  })();