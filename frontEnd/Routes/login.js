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

let Home = styled.a`
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

let Submit = styled.a`
  margin: 40%;
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

let SignUp = styled.a`
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
    // let data = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
    // var bearer = "Bearer " + bearer_token;
    // console.log(data);
    //   fetch("https://book-shop-db.herokuapp.com/login", {
    //     method: "POST",
    //     headers: {
    //       token: getTokenFromStore(),
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(this.state)
    //   })
    //     .then(response => {
    //       console.log(response.headers.token);
    //     })
    //     .then(result => {
    //       console.log(result);
    //     })
    //     .then(() => {
    //       // window.location.replace("logged");
    //     });
  }

  // console.log(req.token);
  //       localStorage.setItem("token", req.token);

  checker() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    if (token) {
      return "logged";
    } else {
      return "/";
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("token");
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
              <SignUp href="register">تسجيل</SignUp>
              <Home href="/">الصفحة الرئيسية</Home>
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
            />
          </Password>
          <Submit onClick={this.Sign.bind(this)}>دخول</Submit>
        </Section>
      </div>
    );
  }
}

export default Login;
