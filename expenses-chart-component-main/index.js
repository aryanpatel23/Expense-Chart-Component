
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const xValues = data.map(item => item.day);
        const yValues = data.map(item => item.amount);
        new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: ["hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(186, 34%, 60%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",
                        "hsl(10, 79%, 65%)",],
                    data: yValues,
                    borderRadius: 5,
                    hoverBackgroundColor: "hsl(10, 79%, 75%)",

                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: {
                        grid: { display: false }
                    },
                    y: {
                        display: false,
                        grid: { display: false }
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
