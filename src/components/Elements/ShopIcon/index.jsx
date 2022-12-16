import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import { Quantity, ShopIconWrapper } from './style'
import PropTypes from 'prop-types'

export const ShopIcon = ({ quantity }) => {
  return (
    <ShopIconWrapper>
      <ShoppingCartOutlined style={{ fontSize: '20px' }} />
      <Quantity> {quantity} </Quantity>
    </ShopIconWrapper>
  )
}
ShopIcon.propTypes = {
  quantity: PropTypes.number
}
