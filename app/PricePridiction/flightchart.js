import { Line } from 'react-chartjs-2';

const FlightChart = ({ data }) => {
    const chartData = {
        labels: data.dates,
        datasets: [
            {
                label: 'Price Trend',
                data: data.prices,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return <Line data={chartData} options={options} />;
};

export default FlightChart;
