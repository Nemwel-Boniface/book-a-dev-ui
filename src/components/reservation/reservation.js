import PropTypes from 'prop-types';

const Reservation = ({ reservation }) => (
  <tr>
    <td>{reservation.name}</td>
  </tr>
);

Reservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reservation;
