import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ShopIcon } from ".";
describe("Funciones dentro del componente ShopIcon", () => {
  it("Debe mostrar la cantidad correcta", () => {
    const sut = render(<ShopIcon quantity={4} />);
    const quantity = sut.getByText("4");
    expect(quantity).toBeInTheDocument();
  });
});
