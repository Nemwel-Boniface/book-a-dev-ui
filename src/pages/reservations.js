import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReservations } from '../redux/actions/reservation';
import Layout from '../layouts/layout';
import Reservation from '../components/reservation/reservation';

const Developers = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservation);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, []);

  return (
    <Layout>
      <div className="devs">
        <h1>Reservation List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Location</th>
              <th>Developer ID</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length ? (
              reservations.map((reservation) => (
                <Reservation reservation={reservation} key={reservation.id} />
              ))
            ) : (
              <tr>
                <td>No reservations found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Developers;
