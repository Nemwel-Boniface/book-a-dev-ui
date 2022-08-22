import { useSelector } from 'react-redux';
import Layout from '../layouts/layout';
import Reservation from '../components/reservation/reservation';

const Developers = () => {
  const { reservations } = useSelector((state) => state.reservation);
  return (
    <>
      <Layout>
        <div className="devs">
          <h1>Reservation List</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Location</th>
                <th>Developer Name</th>
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
                  <td colSpan={5} style={{ textAlign: 'center' }}>
                    No reservations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default Developers;
