import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/project/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id]);
  const {
    one,
    two,
    three,
    four,
    githubC,
    githubS,
    live,
    img,
    date,
    uses,
    name,
  } = project;
  return (
    <div
      style={{
        minHeight: "1000px",
      }}
    >
      <h2>This is products details {id}</h2>
      <div
        style={{
          width: "50%",
          margin: "0px auto",
          boxShadow: "2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div>
          <img
            style={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "2px 2px 15px 1px rgba(0, 0, 0, 0.2)",
            }}
            src={project?.img}
            alt=""
          />
          <div style={{ padding: "20px 40px 40px 40px" }}>
            <p style={{ fontWeight: "700", fontSize: "30px", color: "blue" }}>
              {name}
              <span
                style={{ fontSize: "20px", color: "black", marginLeft: "40px" }}
              >
                {date}
              </span>
            </p>
            <p
              style={{
                marginBottom: "-10px",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Features:
            </p>
            <ul>
              <li>{one}</li>
              <li>{two}</li>
              <li>{three}</li>
              <li>{four}</li>
            </ul>
            <p>
              <span style={{ fontWeight: "700", fontSize: "25px" }}>
                Used Technology:
              </span>{" "}
              {uses}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
