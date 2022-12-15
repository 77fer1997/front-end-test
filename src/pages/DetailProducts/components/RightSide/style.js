import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem;
  height: auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0rem;
  }
`;
