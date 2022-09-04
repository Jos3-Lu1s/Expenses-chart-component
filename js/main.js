const ctx = 'myChart';

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', "sun"],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)'
            ],
            borderWidth: 1,
            borderRadius: 5,
            borderSkipped: false
        }]
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
        },
        plugins: {
            legend: false,
            tooltip: {
                enabled: false,
                
            }
        },
    }
});

async function GetData() {
    const response = await fetch("http://127.0.0.1:5500/data/data.json");
    const json = await response.json();

    console.log(json);
}

GetData();
