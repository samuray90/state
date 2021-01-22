import React, { useState } from "react";
import data from "./data";
import { StyledMain } from "./otherState.style";

function OtherApp() {
  const [people, setPeople] = useState(data);
  return (
    <StyledMain>
      <section className="container">
        <h3
          style={{
            fontFamily: "cursive",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {people.length} Birthdays today
        </h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </StyledMain>
  );
}

export const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article
            style={{
              padding: " 40px",
              borderRadius: "30px",
              color: " #555151",
              display: "flex",
              justifyContent: "space - around",
              fontFamily: "cursive",
              paddingTop: "10px",
              backgroundColor: "#f0de94",
            }}
            key={id}
            className="person"
          >
            <img
              style={{
                borderRadius: "35px",
                width: "65px",
                height: "65px",
                justifyContent: "center",
              }}
              src={image}
              alt={name}
            />
            <div>
              <h4 style={{ padding: "2px", paddingLeft: "5px" }}>{name}</h4>
              <p style={{ paddingLeft: "5px" }}>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export { OtherApp };
