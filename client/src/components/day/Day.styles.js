import styled from 'styled-components';

export const DayStyles = styled.article`
  cursor: ${(props) =>
    props.isFetching === false
      ? 'pointer !important'
      : 'not-allowed !important'};

  pointer-events: ${(props) =>
    props.isFetching === false ? null : 'none !important'};

  background: ${(props) => (props.hasDutyOn ? null :  '#94949a !important')};
  transition: background 0.3s ease;

display: inline-block !important;
max-height:100% !important;
margin:0 !important;
padding:10px;
.title{
font-size: 1.4rem;

}
.subtitle{
font-size: 1rem;

}

.found {
  font-size:.7rem
}
`;
