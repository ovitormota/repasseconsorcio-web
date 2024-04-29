import React from "react";

const Container = (props) => {
  return (
    <div
      id={props.id ? props.id : ""}
      className={`container p-8 mx-auto w-full ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;