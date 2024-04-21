export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { gateNumber, dateOfTravel, timeOfTravel } = req.body;
        
        // Fetch prediction from Python API
        const apiRes = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gateNumber,
                dateOfTravel,
                timeOfTravel,
            }),
        });

        const data = await apiRes.json();

        // Respond to the client with the prediction result
        res.status(200).json({ predictedPassengers: data.predictedPassengers });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
