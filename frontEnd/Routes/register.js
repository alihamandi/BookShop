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

let Email = styled.div`
  direction: rtl;
  margin: 50px 0;
`;
let Age = styled.div`
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

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      password: "",
      kind: "user"
    };
  }

  Name(name) {
    this.setState({
      name: name.target.value
    });
  }
  Age(age) {
    this.setState({
      age: age.target.value
    });
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

  Register() {
    let data = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password,
      kind: this.state.kind
    };
    console.log(data);
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
              <Login href="login">تسجيل الدخول</Login>
              <Home href="/">الصفحة الرئيسية</Home>
            </Div>
          </Header>
        </div>
        <Section>
          <Name>
            <Text>اسم المستخدم</Text>
            <Input
              onChange={event => {
                this.Name(event);
              }}
              type="text"
              placeholder="اسم المستخدم"
            />
          </Name>
          <Age>
            <Text>العمر</Text>
            <Input
              onChange={event => {
                this.Age(event);
              }}
              type="number"
              placeholder="العمر"
            />
          </Age>
          <Email>
            <Text>البريد الالكتروني</Text>
            <Input
              onChange={event => {
                this.Email(event);
              }}
              type="email"
              id="emailField"
              required
              placeholder="البريد الالكتروني"
            />
          </Email>
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
          <Submit href="logged" onClick={this.Register.bind(this)}>
            تسجيل
          </Submit>
        </Section>
      </div>
    );
  }
}
export default Register;
