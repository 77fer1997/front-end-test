import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../models";
import { Gallery, ProductCard } from "./components";
import { HeaderGrid } from "../../components";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { SearchWrapper } from "./components/SearchWrapper";
import { useEffect } from "react";
import { getProducts } from "../../services/products.services";
import { useState } from "react";
import { ShopIcon } from "../../components/Elements";
import { useCartContext } from "../../context/CartContext";
const { Header, Content } = Layout;
const { Title } = Typography;

const Products = () => {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();

  const { Search } = Input;
  const { quantity } = useCartContext();

  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onSearch = (text) => {
    const filteredProducts = products.filter(
      (product) =>
        product.model.toLowerCase().includes(text) ||
        product.brand.toLowerCase().includes(text)
    );
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setFilteredProducts(products);
    });
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
          padding: "25px 50px",
          height: "calc(100vh - 64px)",
        }}
      >
        <SearchWrapper>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={(e) => onSearch(e)}
            style={{
              maxWidth: 400,
            }}
            size="large"
          />
        </SearchWrapper>

        <Gallery>
          {filteredProducts?.map(({ id, model, brand, price, imgUrl }) => (
            <ProductCard
              key={id}
              title={`${brand}${model}`}
              model={model}
              price={price}
              brand={brand}
              image={imgUrl}
              navigateTo={() => navigate(`${Paths.PRODUCTS}/${id}`)}
            />
          ))}
        </Gallery>
      </Content>
    </Layout>
  );
};

export default Products;
