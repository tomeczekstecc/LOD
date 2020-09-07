import styled from 'styled-components';

export const MonthStyles = styled.div`
  display: inline-grid;
  grid-template-columns: 140px 140px 140px 140px 140px 90px 90px;
  grid-template-rows: repeat(5, 120px);
  gap: 10px;

  /* grid-template-rows: 10% 10% 10% 10% 10%; */
`;
export const MonthWrapper = styled.div`

  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  align-content: center !important;
  align-items: center !important;
  height: 100vh;
  flex-grow: 4;
`;
