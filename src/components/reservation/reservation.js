import PropTypes from 'prop-types';

const Reservation = ({ reservation }) => (
  <tr>
    <td>{reservation.id}</td>
    <td>{reservation.location}</td>
    <td>{reservation.developer_id}</td>
    <td>{reservation.start_date}</td>
    <td>{reservation.end_date}</td>
  </tr>
);

Reservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    developer_id: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reservation;
