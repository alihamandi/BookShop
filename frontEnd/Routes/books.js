import React from "react";
import styled from "styled-components";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

let Header = styled.header`
  position: fixed;
  display: flex;
  top: 0%;
  margin-top: 0;
  justify-content: space-between;
  align-content: center;
  background-color: #f9f9f9;
  width: 100%;
  height: 100px;
  align-items: center;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
  margin-bottom: 2%;
  z-index: 101;
`;

let Logo = styled.div`
  margin-left: 5%;
  margin-top: 0.75%;
`;

let Section = styled.div`
  max-width: 90%;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 100px;
`;

let Card = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  margin-bottom: 40px;
  transition: 0.3s ease;
  direction: rtl;
  display: flex;
  min-width: 600px;
  &:hover {
    transform: translateY(-10px);
  }
`;

let Img = styled.img`
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
  margin-left: 25px;
`;

let Tilte = styled.p`
  font-size: 1.75rem;
  font-family: jannaB;
  &:hover {
    color: #36a64f;
  }
`;

let Des = styled.p`
  font-size: 1rem;
  width: 60%;
`;

let Text = styled.div`
  display: block;
  position: relative;
`;

let Arrow = styled.div`
  background-color: #36a64f;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin: auto;
  margin-left: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  &:hover {
    background-color: #353a85;
  }
  &:active {
    position: relative;
    bottom: -2px;
    right: 2px;
  }
`;
let Img2 = styled.img`
  padding: 10px;
  height: 30px;
  width: 30px;
`;
let TheRouter = styled.div`
  display: flex;
  position: fixed;
  top: 50px;
  right: 7%;
  margin: auto;
  z-index: 90;
  animation: 0.75s ease-out 0s 1 slideInFromRight;
`;

let P = styled.p`
  padding-top: 10px;
`;

let Div = styled.div`
  display: flex;
  align-item: center;
  align-text: center;
  margin-right: 8%;
`;

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch("https://book-shop-db.herokuapp.com/booksN")
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data
        });
      })
      .then(() => console.log(this.state.list))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Header>
            <Logo className="img">
              <img
                width="150px"
                src={require("../assets/1.png")}
                alt="the logo"
              />
            </Logo>
            <Div>
              <Link className="home" to="/logged">
                ألصفحة الرئيسية
              </Link>
              <Link className="uplaod" to="/upload">
                اضف كتباً جديدة
              </Link>
            </Div>
          </Header>
          <TheRouter>
            <Link className="link" to="/">
              <P>تواصل معنا</P>
            </Link>
            <Link className="link" to="/">
              <P>عن الموقع</P>
            </Link>
            <Link className="this-link" to="/books">
              <P>الكتب</P>
            </Link>
          </TheRouter>
        </div>
        <Section>
          {this.state.list.map((item, i) => {
            return (
              <Card key={i}>
                <Img width="200" height="200" src={item.cover} />
                <Text>
                  <Tilte>{item.title}</Tilte>
                  <Des>{item.des}</Des>
                </Text>
                <Arrow>
                  <a href={item.dlink}>
                    <Img2 src={require("../assets/arr.svg")} alt="download" />
                  </a>
                </Arrow>
              </Card>
            );
          })}
        </Section>
      </div>
    );
  }
}
export default Books;
