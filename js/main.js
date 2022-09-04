const ctx = 'myChart';

async function GetData() {
    const response = await fetch("http://127.0.0.1:5500/data/data.json");
    const json = await response.json();

    let datos = [];
    let days = [];
    let colors = [];

    for (let i = 0; i < json.length; i++) {
        datos.push(json[i].amount);
        days.push(json[i].day);
    }
    let max = 0;
    for (let j = 0; j < datos.length; j++) {
        if (max < datos[j]) {
            max = datos[j];
        }
    }
    for (let i = 0; i < datos.length; i++) {
        if (datos[i] != max) {
            colors.push('hsl(10, 79%, 65%)');
        }else{
            colors.push('hsl(186, 34%, 60%)');
        }
    }

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                data: datos,
                backgroundColor: colors,
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
                    enabled: true,
                    xAlign: "center",
                    yAlign: "center",
                    displayColors: false,
                    padding: 10,
                    bodyFont: {
                        size: 15,
                        weight: "bold"
                    },
                    callbacks: {
                        title: empty = () => { "" },
                        label: function(context) {
                            let label = context.dataset.label || '';
                
                            if (context.parsed.y !== null) {
                              label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                              }).format(context.parsed.y);
                            }
                            return label;
                          }
                    }
                }
            },
        }
    });
}

GetData();
