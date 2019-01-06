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
  height: 125px;
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

let SingUp = styled.a`
  width: 50px;
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

let Login = styled.a`
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

let SignDiv = styled.div`
  display: flex;
  align-item: center;
  align-text: center;
  margin-right: 8%;
`;
let SignDiv2 = styled.div`
  display: flex;
  align-item: center;
  align-text: center;
  margin-top: 8%;
`;

let Router = styled.div`
  display: flex;
  position: fixed;
  top: 75px;
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

let P = styled.p`
  padding-top: 10px;
`;

let P2 = styled.div`
  position: absolute;
  top: 32.5%;
  max-width: 500px;
  font-size: 3.5rem;
  direction: rtl;
  color: #5c5c5c;
  right: 8%;
  animation: 0.75s ease-out 0s 1 slideInFromRight;
  display: block;
`;

let PageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 18%;
`;

let Art = styled.img`
  height: 70%;
  width: 50%;
  position: absolute;
  top: 35%;
  left: 1%;
  animation: 0.75s ease-out 0s 1 slideInFromLeft;
`;

let Line = styled.div`
  position: relative;

  width: 150px;
  height: 0;
  background-color: #5c5c5c;
  border: 2.5px solid #5c5c5c;
  right: 0%;
  animation: 0.75s ease-out 0s 1 slideInFromRight;
`;

class Main extends React.Component {
  constructor() {
    super();
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
            <SignDiv>
              <Login href="login">تسجيل الدخول</Login>
              <SingUp href="register">تسجيل</SingUp>
            </SignDiv>
          </Header>
          <Router>
            <Route>
              <P>تواصل معنا</P>
            </Route>
            <Route>
              <P>عن الموقع</P>
            </Route>
            <Route href="booksN">
              <P>الكتب</P>
            </Route>
          </Router>
        </div>
        <PageDiv>
          <div>
            <P2>
              اختر الكتب التي تناسبك .....
              <Line />
              <SignDiv2>
                <SingUp href="register">تسجيل</SingUp>
                <Login href="login">تسجيل الدخول</Login>
              </SignDiv2>
            </P2>
          </div>
          <Art src={require("../assets/bookshop-02.svg")} alt="art" />
        </PageDiv>
      </div>
    );
  }
}

export default Main;
