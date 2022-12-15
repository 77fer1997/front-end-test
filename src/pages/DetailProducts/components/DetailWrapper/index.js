import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1290px) {
    grid-template-columns: 1fr;
  }
`;
