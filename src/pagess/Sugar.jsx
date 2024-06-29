import Chart from 'chart.js/auto'
import { sampleData } from '../data/data';

// This function handles the rendering of charts
export default (async function() {
    const data = sampleData
    new Chart(
      document.getElementById('Sugar'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.day),
          datasets: [
            {
              label: 'Sugar spread out to 30 days',
              data: data.map(row => row.meals.breakfast.sugar)
            }
          ]
        }
      }
    );
  })();