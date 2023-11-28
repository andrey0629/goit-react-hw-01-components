import {
  StatsListWrap,
  StatsListItem,
  StatsContainerStyle,
} from './statistic.styled';
import PropTypes from 'prop-types';
export const Statistics = props => {
  return (
    <div>
      <StatsContainer {...props}>
        <MarkupListStats {...props} />
      </StatsContainer>
    </div>
  );
};

const StatsContainer = ({ title, children }) => {
  return (
    <StatsContainerStyle>
      {title ? <h2>Upload stats</h2> : null}
      {children}
    </StatsContainerStyle>
  );
};
function MarkupListStats({ stats }) {
  const markupList = stats.map(({ id, label, percentage }) => {
    return (
      <StatsListItem key={id} style={{ backgroundColor: randomColor() }}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </StatsListItem>
    );
  });
  return <StatsListWrap>{markupList}</StatsListWrap>;
}

function randomColor() {
  const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return random;
}

MarkupListStats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
