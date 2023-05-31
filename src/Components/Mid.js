import React from "react";

const card = [
  {
    No: 926,
    ds: "Regular visitors",
  },
  {
    No: 214,
    ds: "Finished Projects",
  },
  {
    No: 118,
    ds: "Happy Clients",
  },
  {
    No: 16,
    ds: "Total Awards",
  },
];

export default function Mid() {
  return (
    <div>
      <div className="container" style={{ margin: "100px" }}>
        <div className="card-deck">
          {card.map((item, index) => {
            return (
              <>
                <div
                  key={index.id}
                  className="card"
                  style={{
                    height: "90px",
                    width: "100px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                  }}
                >
                  <div className="card-body text-center">
                    <h3 style={{ color: "#C1F59A" }}>{item.No}</h3>
                    <p style={{ color: "grey" }}>{item.ds}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
