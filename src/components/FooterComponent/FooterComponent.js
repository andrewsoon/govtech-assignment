import React, { Component } from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./FooterComponent.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FacebookOutlined style={{ margin: "10px" }} />
        <InstagramOutlined style={{ margin: "10px" }} />
        <MailOutlined style={{ margin: "10px" }} />
      </div>
    );
  }
}

export default Footer;
