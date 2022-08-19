import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReservation } from '../redux/actions/reservation';

const FormReservation = () => {
  const [reservation, setReservation] = useState({
    city: '',
    start_date: '',
    end_date: '',
  });
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleOnChange = (event) => {
    setReservation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const cities = ['Nairobi', 'Mombasa', 'Kinshasa', 'Goma', 'Dodoma', 'Kigali'];

  const handleReserve = (e) => {
    e.preventDefault();
    dispatch(createReservation(reservation, id));
  };

  return (
    <section className="form-section">
      <h1>Reserve a developer</h1>
      <p>Please complete the form below to book a developer</p>

      <div>
        <form className="form" onSubmit={handleReserve}>
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
          <button className="submit_btn" type="submit">
            Reserve
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormReservation;
