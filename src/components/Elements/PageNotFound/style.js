import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3rem;
  & > span:nth-child(1) {
    color: red;
  }
`
