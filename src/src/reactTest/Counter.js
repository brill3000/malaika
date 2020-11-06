import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: teal;
  color: black;
  padding: 0.1em 0.3em;
  font-size: 1rem;
  border: none;
  border-radius: 0.3em;
  &:hover {
    background-color: #249494;
  }
  &:active {
    background-color: white;
  }
`;

export default function Counter(props) {
  let counter = 0;
  const [count, setCounter] = useState();
  const fomatCount = () => (count === 0 ? "Zero" : count);
  useEffect(() => {
    setCounter(0);
  }, []);
 const handleChange = () => setCounter(count + 1);

  return (
    <>
      <span className={getBadgeClasses()}>{fomatCount()}</span>
      <Button onClick = {handleChange}>INCREMENT</Button>
    </>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }
  
  
}
