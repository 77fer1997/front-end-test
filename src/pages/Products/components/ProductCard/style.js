import styled from 'styled-components'
export const Card = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const TitleCard = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`
export const WrapperImage = styled.div`
  overflow: hidden;
`
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.25);
  }
`
