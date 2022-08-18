import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReservation } from '../redux/actions/reservation';
import ReservationForm from '../components/reserve/form';

const FormReservation = () => {
  const [reservation] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleReserve = (e) => {
    e.preventDefault();
    dispatch(createReservation(reservation, id));
  };

  return (
    <section className="form-section">
      <h1>Reserve a developer</h1>
      <p>Please complete the form below to book a developer</p>

      <div>
        <ReservationForm onSubmit={handleReserve} />
      </div>

    </section>
  );
};

export default FormReservation;
