import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationForm = () => {
  const [reservation, setReservation] = useState({
    city: '',
    start_date: '',
    end_date: '',
  });

  const handleOnChange = (event) => {
    setReservation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const cities = [
    'Nairobi',
    'Mombasa',
    'Kinshasa',
    'Goma',
    'Dodoma',
    'Kigali',
  ];

  return (
    <div>
      <form className="form">
        <select
          className="field"
          name="city"
          onChange={handleOnChange}
          value={reservation.city}
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input
          className="field"
          name="start_date"
          onChange={handleOnChange}
          type="date"
          value={reservation.start_date}
        />
        <input
          className="field"
          placeholder="End date"
          name="end_date"
          onChange={handleOnChange}
          type="date"
          value={reservation.end_date}
        />
        <button
          className="field"
          type="submit"
        >
          Reserve
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
