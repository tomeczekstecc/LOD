import styled from 'styled-components';

export const DayStyles = styled.article`
  cursor: ${(props) =>
    props.isFetching === false
      ? 'pointer !important'
      : 'not-allowed !important'};

  pointer-events: ${(props) =>
    props.isFetching === false ? null : 'none !important'};

  background: ${(props) => (props.hasDutyOn ? null : '#94949a !important')};

  background: ${(props) =>
    props.day === 6 || props.day === 0 ? '#555 !important' : null};

  pointer-events: ${(props) =>
    props.day === 6 || props.day === 0 ? 'none !important' :null };

  transition: background 0.3s ease;

  display: inline-block !important;
  max-height: 100% !important;
  margin: 0 !important;
  padding: 10px;
  .title {
    font-size: 1.4rem;
  }
  .subtitle {
    font-size: 1rem;
  }

  .found {
    font-size: 0.7rem;
  }
`;
