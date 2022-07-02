import PropTypes from 'prop-types';
import NotificationMessage from './Notification.style';

export const Notification = ({ message }) => {
  return (
    <div>
      <NotificationMessage>{message}</NotificationMessage>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
