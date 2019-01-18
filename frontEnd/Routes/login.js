import React from "react";
import styled from "styled-components";
const axios = require("axios");
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
  max-width: 75%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 100px;
`;

let Name = styled.div`
  direction: rtl;
  margin: 50px 0;
`;

let Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 25px;
  border: none;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.16);
  margin-top: 25px;
  padding: 10px 25px;
  outline: none;
  &:focus {
    box-shadow: 0 0px 15px #36a64f;
  }
`;

let Text = styled.div`
  padding-right: 25px;
  font-size: 1.5rem;
`;

let Password = styled.div`
  direction: rtl;
  margin: 50px 0;
`;

let Div = styled.div`
  display: flex;
  align-item: center;
  align-text: center;
  margin-right: 8%;
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  Email(email) {
    this.setState({
      email: email.target.value
    });
  }
  Pass(pass) {
    this.setState({
      password: pass.target.value
    });
  }
  Sign() {
    axios
      .post("https://book-shop-db.herokuapp.com/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/logged");
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
              <Link className="this-signup" to="/register">
                تسجيل
              </Link>
              <Link className="this-home" to="/">
                الصفحة الرئيسية
              </Link>
            </Div>
          </Header>
        </div>
        <Section>
          <Name>
            <Text>البريد الالكتروني</Text>
            <Input
              onChange={event => {
                this.Email(event);
              }}
              type="text"
              placeholder="البريد الالكتروني"
            />
          </Name>
          <Password>
            <Text>رمز الدخول</Text>
            <Input
              onChange={event => {
                this.Pass(event);
              }}
              type="password"
              placeholder="رمز الدخول"
              onKeyPress={event => {
                if (event.key == "Enter") {
                  this.Sign();
                } else {
                  console.log("typing");
                }
              }}
            />
          </Password>
          <Link className="submit" to="/login" onClick={this.Sign.bind(this)}>
            دخول
          </Link>
        </Section>
      </div>
    );
  }
}

export default Login;
