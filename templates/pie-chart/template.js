export function render(data, config) {
    const ctx = document.getElementById(config.target).getContext('2d');

    const chartColors = config.colors || [
        '#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#2ecc71'
    ];

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.map(row => row[config.x]),
            datasets: [{
                data: data.map(row => row[config.y]),
                backgroundColor: chartColors,
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverOffset: 30
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#eaeaea',
                        font: {
                            size: 14,
                            family: "'Segoe UI', sans-serif"
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#eaeaea',
                    borderColor: '#ff6384',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8
                }
            }
        }
    });
}