import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../models";
import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { DetailWrapper, LeftSide, RightSide } from "./components";
import { HeaderGrid } from "../../components";
import { useDetailProductContext } from "./context/DetailProducts.context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../../services/products.services";
import { useCartContext } from "../../context/CartContext";
import { ShopIcon } from "../../components/Elements";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const DetailProducts = () => {
  let { productId } = useParams();
  const navigate = useNavigate();
  const { quantity, addProductToCart } = useCartContext();
  const { setDetailProduct } = useDetailProductContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Title } = Typography;
  const handleBackClick = () => {
    navigate(Paths.PRODUCTS);
  };
  useEffect(() => {
    getProductDetail(productId).then((product) => setDetailProduct(product));
  }, []);

  return (
    <Layout className="layout">
      <Header
        style={{
          background: colorBgContainer,
        }}
      >
        <HeaderGrid>
          <Link to={Paths.PRODUCTS}>
            <Title style={{ margin: 0 }} level={3} type="primary">
              My APP
            </Title>
          </Link>

          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              <Link to={Paths.PRODUCTS}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Products</Breadcrumb.Item>
          </Breadcrumb>

          <ShopIcon quantity={quantity} />
        </HeaderGrid>
      </Header>
      <Content
        style={{
          padding: "25px 30px",
          height: "100%",
          width: "100%",
        }}
      >
        <Title level={3}>
          <ArrowLeftOutlined
            onClick={handleBackClick}
            style={{ marginRight: "1rem" }}
          />{" "}
          Details view
        </Title>
        <DetailWrapper>
          <LeftSide />
          <RightSide />
        </DetailWrapper>
      </Content>
    </Layout>
  );
};

export default DetailProducts;
