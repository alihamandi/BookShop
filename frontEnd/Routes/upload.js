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
  margin-top: 200px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

let Photo = styled.div`
  direction: rtl;
  margin: 50px 0;
`;

let Download = styled.div`
  direction: rtl;
  margin: 50px 0;
`;

let Div = styled.div`
  display: flex;
  align-item: center;
  align-text: center;
  margin-right: 8%;
`;
class Uplaod extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      des: "",
      cover: "",
      dlink: ""
    };
  }

  Title(title) {
    this.setState({
      title: title.target.value
    });
  }
  Des(des) {
    this.setState({
      des: des.target.value
    });
  }
  Cover(cover) {
    this.setState({
      cover: cover.target.value
    });
  }
  Dlink(dlink) {
    this.setState({
      dlink: dlink.target.value
    });
  }

  Upload() {
    fetch("https://book-shop-db.herokuapp.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzJlOTFiYjhkNGM5YTcxYjQ4YWI1OWMiLCJpYXQiOjE1NDY1NTU5NDF9.A1WQD8DxA1GEZJCWm4_AQFHPWV4q7oWFFdtJddJqYYE"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (this.state.title && this.state.cover && this.state.dlink) {
          return response.json();
        } else {
          console.log("wrong entry");
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
          this.props.history.push("/books");
        }
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
              <Link className="home" to="/books">
                عودة
              </Link>
            </Div>
          </Header>
        </div>
        <Section>
          <Name>
            <Text>عنوان الكتاب</Text>
            <Input
              onChange={event => {
                this.Title(event);
              }}
              type="text"
              placeholder="عنوان الكتاب"
            />
          </Name>
          <Name>
            <Text>الوصف</Text>
            <Input
              onChange={event => {
                this.Des(event);
              }}
              type="text"
              placeholder="الوصف"
            />
          </Name>
          <Photo>
            <Text>رابط صورة الغلاف</Text>
            <Input
              onChange={event => {
                this.Cover(event);
              }}
              type="text"
              placeholder="رابط صورة الغلاف"
            />
          </Photo>
          <Download>
            <Text>رابط التحميل</Text>
            <Input
              onChange={event => {
                this.Dlink(event);
              }}
              type="text"
              placeholder="رابط التحميل"
            />
          </Download>
          <Link
            className="books-upload"
            to="/upload"
            onClick={this.Upload.bind(this)}
          >
            رفع
          </Link>
        </Section>
      </div>
    );
  }
}

export default Uplaod;
