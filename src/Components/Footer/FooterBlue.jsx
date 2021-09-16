// import { fontWeight } from "@material-ui/system";
import React from "react";
import FooterWhite from "./FooterWhite";

const input1 = {
  width: "25%",
  marginRight: "5px",
  height: "44px",
  border: "none",
  borderRadius: "4px",
  fontSize: "20px",
  fontWeight: "100",
  paddingLeft: "8px",
};
const label = { color: "white", fontSize: "17px", padding: "0", margin: "0" };
const button = {
  backgroundColor: "#0071C2",
  border: "none",
  borderRadius: "4px",
  height: "46px",
  padding: "13px",
  color: "white",
  fontSize: "18px",
  fontWeight: "100",
};
const p1 = {
  color: "#F6F7F9",
  fontSize: "30px",
  fontWeight: "300",
  padding: "0",
  margin: "0",
};
const p2 = {
  color: "#AFB1B5",
  fontSize: "16px",
  padding: "0",
  margin: "5px",
  marginBottom: "14px",
};

const link = {
  color: "white",
  fontSize: "14px",
  fontWeight: "500"
}

const FooterBlue = () => {
  return (
    <>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "#00224F",
          padding: "30px",
          textAlign: "center",
          width: "94vw",
          marginLeft: "-8px ",
          //  marginTop: "-8px" ,
          overflowY: "hidden"

        }}
      >
        <p style={p1}>Save time, save money!</p>
        <p style={p2}>Sign up and we'll send the best deals to you</p>
        <div style={{ padding: "10px" }}>
          <input style={input1} type="text" placeholder=" Your email" />
          <button style={button}>Subscribe</button>
        </div>
        <input type="checkbox" id="c1" />
        <label style={label} forhtml="c1">
          Send me a link to get the FREE Booking.com app!
        </label>
      </div>
      <div
        style={{
          backgroundColor: "#003580",
          paddingTop: "20px",
          paddingBottom: "15px",
          border: "none",
          width: "98.4vw",
          marginLeft: "-8px ",
          //  marginTop: "-8px" ,
          overflowY: "hidden",
        }}
      >
        <button
          style={{
            padding: "5px",
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
            textAlign: "center",
            margin: "auto",
            marginLeft: "50%"
          }}
        >
          List your property
        </button>
        <hr style={{ border: "none", background: "white", height: "1px", marginTop: "15px" }} />
        <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
          <a href="/" style={link}>Mobile version</a>
          <a href="/" style={link}>Your account</a>
          <a href="/" style={link}>Make changes online to your booking</a>
          <a href="/" style={link}>Contact Customer Service</a>
          <a href="/" style={link}>Become an affiliate</a>
          <a href="/" style={link}>Booking.com for Business</a>
        </div>
      </div>
      <FooterWhite />
    </>
  );
};

export default FooterBlue;
