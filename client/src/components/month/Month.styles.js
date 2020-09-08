import styled from 'styled-components';

export const MonthStyles = styled.div`
  position: relative !important;
  display: inline-grid;
  grid-template-columns: 140px 140px 140px 140px 140px 90px 90px;
  grid-template-rows: repeat(6, 115px);
  gap: 10px;
  margin-bottom: 0 !important;
  overflow: hidden;
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
