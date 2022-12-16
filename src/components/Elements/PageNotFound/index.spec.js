/* eslint-env jest */
import React from 'react'
import { render } from '@testing-library/react'
import { PageNotFound } from '.'
describe('Funciones dentro del componente ShopIcon', () => {
  it('Debe mostrar el texto', () => {
    const sut = render(<PageNotFound />)
    const text = sut.getByText('Página no encontrada')
    expect(text).toBeInTheDocument()
  })
})
