import React from 'react'
import { useDetailProductContext } from '../../context/DetailProducts.context'
import { Image, Wrapper } from './style'

export const LeftSide = () => {
  const { detailProduct } = useDetailProductContext()

  return (
    <Wrapper>
      <Image src={detailProduct?.imgUrl} />
    </Wrapper>
  )
}
