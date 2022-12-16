import { Typography } from "antd";
import React from "react";
import { Wrapper } from "./style";

const { Title } = Typography;
export const PageNotFound = () => {
  return (
    <Wrapper>
      <span> 404 </span>
      <span> Página no encontrada </span>
    </Wrapper>
  );
};
