import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem } from './FeedbackOptions.style.js';
import { Button } from 'components/ui/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <FeedbackItem key={option}>
          <Button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            id={option}
          >
            {option}
          </Button>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
