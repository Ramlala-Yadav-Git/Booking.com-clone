import React from "react";
import styles from "../SearchData/DataComponent.module.css";

const DataComponent = ({ data }) => {
  const lab = "See Availability >";
  return (
    <div className={styles.maindiv}>
      <div className={styles.imgdiv}>
        {/* <img src={data[0]} alt="" /> */}
      </div>
      <div className={styles.datadiv}>
        {/* <h3 className={styles.h3}>{data[1]}</h3> */}

        <div>
          <p
            style={{
              color: "#0071C2",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {/* {data[2]} */}
          </p>
          <p
            style={{
              color: "#0071C2",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Show on map
          </p>
          {/* <p>{data[3]} km from center</p> */}
        </div>
        <h5 style={{ padding: "0", marginTop: "4px", marginBottom: "6px" }}>
          {/* {data[4]} */}
        </h5>
        {/* <p style={{ padding: "0", margin: "0", fontSize: "13px" }}>{data[5]}</p> */}
        <h5
          style={{
            color: "green",
            padding: "0",
            marginTop: "6px",
            marginBottom: "0",
          }}
        >
          Breakfast Included
        </h5>
        <h5
          style={{
            color: "green",
            padding: "0",
            marginTop: "3px",
            marginBottom: "0",
          }}
        >
          FREE cancellation • No prepayment needed
        </h5>
        <p
          style={{
            padding: "0",
            margin: "0",
            fontSize: "13px",
            color: "green",
            marginTop: "6px",
          }}
        >
          You can cancel later, so lock in this great price today!
        </p>
        <h5 style={{ color: "brown", padding: "0", marginTop: "2px" }}>
          Only 6 rooms left at this price on our site
        </h5>
      </div>
      <div>
        <div style={{ display: "flex", float: "right" }}>
          <div style={{ marginRight: "3px" }}>
            <h5 style={{ padding: "0", margin: "0", fontSize: "16px" }}>
              Very Good
            </h5>
            <p
              style={{
                padding: "0",
                margin: "0",
                color: "gray",
                fontSize: "13px",
              }}
            >
              87 Reviews
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#003580",
              color: "white",
              padding: "8px",
              width: "20px",
              borderRadius: "5px 5px 5px 0",
            }}
          >
            8.7
          </div>
        </div>

        <div style={{ marginTop: "75px", textAlign: "right" }}>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "gray",
              fontSize: "13px",
            }}
          >
            1 Night, 2 Adults
          </p>
          <p style={{ margin: "0", padding: "0" }}>
            <span
              style={{
                color: "red",
                textDecoration: "line-through",
                fontSize: "14px",
              }}
            >
              ₹ 1,03
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>₹ 1,030</span>
          </p>
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "gray",
              fontSize: "13px",
            }}
          >
            tax and all
          </p>
          <button
            style={{
              backgroundColor: "#0071C2",
              color: "white",
              border: "none",
              borderRadius: "3px",
              padding: "15px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            {lab}
          </button>
        </div>
      </div>
    </div>
  );
};

export { DataComponent };
