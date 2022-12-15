import { Col, Row, Typography } from "antd";
import React from "react";
import { Card, Image, TitleCard, WrapperImage } from "./style";

export const ProductCard = ({
  title,
  image,
  navigateTo,
  brand,
  model,
  price,
}) => {
  const { Title, Text } = Typography;
  return (
    <Card>
      <TitleCard>{title}</TitleCard>
      <WrapperImage>
        <Image src={image} alt="" onClick={navigateTo} />
      </WrapperImage>
      <Row>
        <Col span={12}>
          <Title level={5}> Brand: </Title>
        </Col>
        <Col span={12}>
          <Text> {brand} </Text>
        </Col>
        <Col span={12}>
          <Title level={5}> Model: </Title>
        </Col>
        <Col span={12}>
          <Text> {model} </Text>
        </Col>
        <Col span={12}>
          <Text>
            <Title level={5}> Price: </Title>
          </Text>
        </Col>
        <Col span={12}>
          <Text>
            <Text> ${price} </Text>
          </Text>
        </Col>
      </Row>
    </Card>
  );
};
