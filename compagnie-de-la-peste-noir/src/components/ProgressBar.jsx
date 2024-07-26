import './ProgressBar.css';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="ProgressBar">
      <div className="ProgressBar-container">
        <div className="ProgressBar-filler" style={{ width: `${percentage}%` }}>
          <span className="ProgressBar-label">{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;
