// Dohvatimo element canvas
var canvas = document.getElementById('myCanvas');

// Kreiramo Chart.js grafik
var ctx = canvas.getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [], // Nećemo koristiti oznake osi x
    datasets: [{
      label: 'ln(x)/x',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [] // Ovdje ćemo dodati vrijednosti funkcije
    }]
  }
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }
});

// Dodajemo vrijednosti funkcije u dataset
for (var x = -2; x <= 2; x += 0.1) {
  chart.data.datasets[0].data.push({x: x, y: Math.log(x)/x});
}

// Prikazujemo grafik
chart.update();
