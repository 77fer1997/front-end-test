import React, { useContext, useState, createContext } from 'react'

import PropTypes from 'prop-types'

export const DetailProductContext = createContext()

export const DetailProductProvider = ({ children }) => {
  const [detailProduct, setDetailProduct] = useState(null)
  return (
    <DetailProductContext.Provider value={{ detailProduct, setDetailProduct }}>
      {children}
    </DetailProductContext.Provider>
  )
}
export const useDetailProductContext = () => {
  const context = useContext(DetailProductContext)
  if (context === undefined) {
    throw new Error('DetailProduct debe ser usado dentro de DetailProvider ')
  }
  return context
}
DetailProductProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
