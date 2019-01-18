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

let Div = styled.div`
  display: flex;
  align-item: center;
  align-text: center;
  margin-right: 8%;
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
    // let data = {
    //   name: this.state.name,
    //   age: this.state.age,
    //   email: this.state.email,
    //   password: this.state.password,
    //   kind: this.state.kind
    // };
    // console.log(data);

    fetch("https://book-shop-db.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (this.state.password) {
          return response.json();
        } else {
          console.log("wrong password");
        }
      })
      // .then(request => {
      //   console.log(request.headers.token);
      // })
      .then(result => {
        console.log(result);
        if (!result) {
          console.log(result);
        } else {
          console.log("nothing wrong");
        }
      });
    // .then(() => {
    //   window.location.replace("login");
    // });
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
              <Link className="this-signup" to="/login">
                تسجيل الدخول
              </Link>
              <Link className="this-home" to="/">
                الصفحة الرئيسية
              </Link>
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
          <Link
            className="submit"
            to="/login"
            onClick={this.Register.bind(this)}
          >
            تسجيل
          </Link>
        </Section>
      </div>
    );
  }
}
export default Register;
