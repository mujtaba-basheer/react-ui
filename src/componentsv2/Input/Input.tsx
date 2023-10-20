"use client";

// import { useState, useEffect } from "react";
import { Rating } from "@mui/material";

interface Props {
  id: string;
  label: string;
  type?: "search" | "text" | "password" | "email" | "currency";
}

const Input = (props: Props) => {
  // const [value, setValue] = useState("");

  // useEffect(() => {
  //   console.log({ value });
  // }, [value]);

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        // value={value}
        // onChange={(ev) => setValue(ev.target.value)}
        id={props.id}
        type={props.type || "text"}
      />
      <Rating />
    </div>
  );
};

export default Input;
