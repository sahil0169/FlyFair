
'use client'
import React, { useState } from 'react';
import Topmenu from '@/components/Topmenu';
import styles from './search.module.css';

export default function Search() {
  const [airportCode, setAirportCode] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);  // State to track submission

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', airportCode, time);
    setSubmitted(true);  // Set to true when form is submitted
  };

  return (

    <div>
      <img src='top.png' className="top" />
          <Topmenu/>
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="airportCode">Airport Code:</label>
          <input
            type="text"
            id="airportCode"
            value={airportCode}
            onChange={e => setAirportCode(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Search</button>
      </form>
      {submitted && (
        <div className={styles.imageContainer}>
          <img src="/rush.png" alt="Descriptive Alt Text" className={styles.image}/>
        </div>
      )}
      </div>
      </div>
  );
}
// import React, { useState } from 'react';

// const Predict = () => {
//     const [gateNumber, setGateNumber] = useState('');
//     const [dateOfTravel, setDateOfTravel] = useState('');
//     const [timeOfTravel, setTimeOfTravel] = useState('');
//     const [prediction, setPrediction] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('/api/predict', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 gateNumber,
//                 dateOfTravel,
//                 timeOfTravel,
//             }),
//         });
//         const data = await response.json();
//         setPrediction(data.predictedPassengers);
//     };

//     return (
//         <div>
//             <h1>Predict Passenger Count</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="number"
//                     value={gateNumber}
//                     onChange={(e) => setGateNumber(e.target.value)}
//                     placeholder="Enter gate number"
//                 />
//                 <input
//                     type="date"
//                     value={dateOfTravel}
//                     onChange={(e) => setDateOfTravel(e.target.value)}
//                 />
//                 <input
//                     type="time"
//                     value={timeOfTravel}
//                     onChange={(e) => setTimeOfTravel(e.target.value)}
//                 />
//                 <button type="submit">Predict</button>
//             </form>
//             {prediction && <p>Predicted number of passengers: {prediction}</p>}
//         </div>
//     );
// };

// export default Predict;

