import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Quantity, ShopIconWrapper } from "./style";

export const ShopIcon = ({ quantity }) => {
  return (
    <ShopIconWrapper>
      <ShoppingCartOutlined style={{ fontSize: "20px" }} />
      <Quantity> {quantity} </Quantity>
    </ShopIconWrapper>
  );
};
