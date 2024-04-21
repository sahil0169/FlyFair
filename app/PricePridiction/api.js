export default function handler(req, res) {
    if (req.method === 'POST') {
        const { departureAirport, arrivalAirport, dateOfTravel } = req.body;
        // Fetch or calculate your historical and predicted prices here
        // This is a mock response
        const response = {
            dates: ['2021-09-01', '2021-09-02', '2021-09-03', '2021-09-04'],
            prices: [200, 210, 205, 215],
            prediction: 220
        };
        res.status(200).json(response);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
