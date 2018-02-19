/**
 * Chart ADSR
 */

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Begin", "Attack", "Decay", "Sustain", "Sustain", "Sustain", "Release"],
        datasets: [{
            label: 'ADSR Piano',
            data: [0, 1, 0.7, 0.7, 0.7, 0.7, 0],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255,99,132,1)'],
            borderWidth: 1,
            lineTension: 0.1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});