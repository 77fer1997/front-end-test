import { Button, Col, Row, Typography } from "antd";
import { Select } from "antd";
import * as yup from "yup";
import { Card } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import { useDetailProductContext } from "../../context/DetailProducts.context";
import { Wrapper } from "./style";
import { useState } from "react";
import { useCartContext } from "../../../../context/CartContext";
import { useEffect } from "react";
import { message } from "antd";
const Option = Select;
const { Text } = Typography;
const { Title } = Typography;
export const RightSide = () => {
  const { detailProduct } = useDetailProductContext();
  const { addProductToCart } = useCartContext();
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "El producto se agrego al carrito.",
    });
  };
  const handleClick = () => {
    addProductToCart();
    success();
  };

  return (
    <Wrapper>
      {contextHolder}
      <Card title="Description" style={{ width: "100%" }}>
        <Row gutter={[18, 12]}>
          <Col span={24} md={12}>
            <Title level={5} type="secondary">
              Marca
            </Title>
            <Text>{detailProduct?.brand}</Text>
            <Title level={5} type="secondary">
              Modelo
            </Title>
            <Text>{detailProduct?.model}</Text>
            <Title level={5} type="secondary">
              Precio
            </Title>
            <Text>${detailProduct?.price}</Text>
            <Title level={5} type="secondary">
              CPU
            </Title>
            <Text> {detailProduct?.cpu} </Text>
            <Title level={5} type="secondary">
              RAM
            </Title>
            <Text> {detailProduct?.ram} </Text>
            <Title level={5} type="secondary">
              S.O.
            </Title>
            <Text> {detailProduct?.so} </Text>
          </Col>
          <Col span={12}>
            <Title level={5} type="secondary">
              Resolución:
            </Title>
            <Text>{detailProduct?.displayResolution}</Text>
            <Title level={5} type="secondary">
              Batería
            </Title>
            <Text> {detailProduct?.battery} </Text>
            <Title level={5} type="secondary">
              Camaras
            </Title>
            <Text> {detailProduct?.primaryCamera} </Text>
            <Title level={5} type="secondary">
              Dimensiones
            </Title>
            <Text> {detailProduct?.dimentions} </Text>
            <Title level={5} type="secondary">
              Peso
            </Title>
            <Text> {detailProduct?.weight} </Text>
          </Col>
        </Row>
      </Card>
      <Card title="Actions" style={{ width: "100%" }}>
        <Row gutter={[24, 18]}>
          <Col span={24} md={12}>
            <Title type="secondary" level={5}>
              Color
            </Title>
            <Select
              value={color || detailProduct?.options.color[0].code}
              onChange={(value) => setColor(value)}
              style={{ width: "100%" }}
            >
              {detailProduct?.options.color.map((color) => (
                <Option key={color.code} value={color.code}>
                  {color.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={24} md={12}>
            <Title type="secondary" level={5}>
              Storage
            </Title>
            <Select
              value={storage || detailProduct?.options.storage[0].code}
              onChange={(value) => setStorage(value)}
              placeholder="Select color"
              style={{ width: "100%" }}
            >
              {detailProduct?.options.storage.map((storage) => (
                <Option key={storage.code} value={storage.code}>
                  {storage.name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={24}>
            <Button onClick={() => handleClick()} type="primary">
              Añadir al carrito
            </Button>
          </Col>
        </Row>
      </Card>
    </Wrapper>
  );
};
