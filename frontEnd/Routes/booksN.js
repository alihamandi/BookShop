import React from "react";
import styled from "styled-components";

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
let Router = styled.div`
  display: flex;
  position: fixed;
  top: 50px;
  right: 7%;
  margin: auto;
  animation: 0.75s ease-out 0s 1 slideInFromRight;
`;

let Route = styled.a`
  width: 100px;
  height: 70px;
  font-size: 1.2rem;
  color: white;
  background-color: #36a64f;
  text-align: center;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  margin-right: 18px;
  transition: transform 300ms ease;
  text-decoration: none;
  &:hover {
    transform: translate(0, 70%);
    background-color: #353a85;
  }
  &:active {
    position: relative;
    bottom: -2px;
    right: 2px;
  }
`;

let ThisRoute = styled.a`
  width: 100px;
  height: 70px;
  font-size: 1.2rem;
  color: white;
  background-color: #36a64f;
  text-align: center;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  margin-right: 18px;
  margin-top: 50px;
  text-decoration: none;
  &:hover {
    background-color: #353a85;
  }
  &:active {
    position: relative;
    bottom: -2px;
    right: 2px;
  }
`;

let P = styled.p`
  padding-top: 10px;
`;

let Upload = styled.a`
  height: 40px;
  font-size: 1.2rem;
  color: white;
  background-color: #36a64f;
  align-text: center;
  padding: 4px 30px 5px 30px;
  border-radius: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  text-decoration: none;
  &:hover {
    background-color: #353a85;
  }
  &:active {
    position: relative;
    bottom: -2px;
    right: 2px;
  }
`;
let Div = styled.div`
  display: flex;
  align-item: center;
  align-text: center;
  margin-right: 8%;
`;

let Home = styled.a`
  color: #b7b7b7;
  margin-right: 25px;
  padding: 5px;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: #353a85;
  }
  &:active {
    position: relative;
    bottom: -2px;
    right: 2px;
  }
`;

class BooksN extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch("https://book-shop-db.herokuapp.com/booksN")
      .then(data => {
        fetch(data.url).then(data2 => {
          console.log(data2);
        });
      })
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
              <Home href="/">الصفحة الرئيسية</Home>
            </Div>
          </Header>
          <Router>
            <Route>
              <P>تواصل معنا</P>
            </Route>
            <Route>
              <P>عن الموقع</P>
            </Route>
            <ThisRoute href="booksN">
              <P>الكتب</P>
            </ThisRoute>
          </Router>
        </div>
        <Section>
          <Card>
            <Img
              width="200"
              height="200"
              src="https://dhad.sa/wp-content/uploads/2016/05/091.png"
            />
            <Text>
              <Tilte>مهزلة العقل البشري</Tilte>
              <Des>
                نلاابهللارتى لاتقف لاقففلا لابللاهتفىهعلاف ثىهخىللهعلا
                هنيىبرخهىثقهخع هيىهب لخهعثارهعىثهق رهثهعخلفاهخيبىرخهثقالنى
                خهثىخهلى هثقىخلى رهثىقلى رهثقىفلى رهخعثىهعخ
              </Des>
            </Text>
          </Card>
        </Section>
      </div>
    );
  }
}
export default BooksN;
