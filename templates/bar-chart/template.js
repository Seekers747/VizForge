export function render(data, config) {
    const ctx = document.getElementById(config.target).getContext('2d');
    
    const chartColors = config.colors || [
        '#ff6600', '#ff8c42', '#ffa566', '#ffbe8a', '#ffd7ae'
    ];
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(row => row[config.x]),
            datasets: [{
                label: config.y || 'Value',
                data: data.map(row => row[config.y]),
                backgroundColor: chartColors[0],
                borderColor: chartColors[1],
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: chartColors[1],
                hoverBorderColor: '#ffffff',
                hoverBorderWidth: 3
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
                    borderColor: '#ff6600',
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#eaeaea',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#eaeaea',
                        font: {
                            size: 12
                        }
                    },
                    beginAtZero: true
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}