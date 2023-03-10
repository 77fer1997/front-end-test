import styled from 'styled-components'

export const Gallery = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  @media (max-width: 432px) {
    grid-template-columns: 1fr;
  }
`
