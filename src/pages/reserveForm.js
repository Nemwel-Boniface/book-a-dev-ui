import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { createReservation } from '../redux/actions/reservation';
import Layout from '../layouts/layout';

const FormReservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [reservation, setReservation] = useState({
    location: '',
    start_date: '',
    end_date: '',
    developer_id: '',
  });
  const { developers } = useSelector((state) => state.developer);
  const { error } = useSelector((state) => state.reservation);

  const handleOnChange = (event) => {
    setReservation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleReserve = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(createReservation(reservation));
      setReservation({
        location: '',
        start_date: '',
        end_date: '',
        developer_id: '',
      });
      setLoading(false);
      navigate('/reservations');
    }, 1000);
  };

  return (
    <Layout>
      <section className="form-section">
        <h1>Reserve a developer</h1>
        <p>Please complete the form below to book a developer</p>

        <div>
          <form className="form" onSubmit={handleReserve}>
            {error && (
              <div className="error_message">
                <p>Wrong reservation credentials or An error occured</p>
              </div>
            )}
            <select
              name="developer_id"
              onChange={handleOnChange}
              className="field"
              value={reservation.developer_id}
              required
            >
              <option value="" disabled>
                Select a developer
              </option>
              {developers
                && developers.map((developer) => (
                  <option key={developer.id} value={developer.id}>
                    {developer.name}
                  </option>
                ))}
            </select>
            <input
              className="field"
              name="location"
              placeholder="Location"
              onChange={handleOnChange}
              type="text"
              value={reservation.location}
              required
            />

            <input
              className="field"
              name="start_date"
              onChange={handleOnChange}
              type="date"
              value={reservation.start_date}
              required
            />
            <input
              className="field"
              placeholder="End date"
              name="end_date"
              onChange={handleOnChange}
              type="date"
              value={reservation.end_date}
              required
            />
            <button className="submit_btn" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <ThreeDots
                    height="15"
                    width="40"
                    radius="1"
                    color="#ffffff"
                  />
                </>
              ) : (
                'Reserve Developer'
              )}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default FormReservation;
