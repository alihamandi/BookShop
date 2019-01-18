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

let TheRouter = styled.div`
  display: flex;
  position: fixed;
  top: 75px;
  right: 7%;
  margin: auto;
  animation: 0.75s ease-out 0s 1 slideInFromRight;
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
              <Link className="login" to="/login">
                تسجيل الدخول
              </Link>
              <Link className="signup" to="/register">
                تسجيل
              </Link>
            </SignDiv>
          </Header>
          <TheRouter>
            <Link className="link" to="/">
              <P>تواصل معنا</P>
            </Link>
            <Link className="link" to="/">
              <P>عن الموقع</P>
            </Link>
            <Link className="link" to="/booksN">
              <P>الكتب</P>
            </Link>
          </TheRouter>
        </div>
        <PageDiv>
          <div>
            <P2>
              اختر الكتب التي تناسبك .....
              <Line />
              <SignDiv2>
                <Link className="signup" to="/register">
                  تسجيل
                </Link>
                <Link className="login" to="/login">
                  تسجيل الدخول
                </Link>
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
