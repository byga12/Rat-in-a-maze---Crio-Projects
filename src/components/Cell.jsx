import React from "react";
import s from "./Cell.module.sass";
export default function Cell(props) {
  const { value } = props;
  switch (value) {
    case 0:
      return <div></div>;
    case 1:
      return <div className={s.blocked}></div>;
    case 2:
      return <div className={s.path}></div>;
    case 3:
      return <div className={s.start}></div>;
    case 4:
      return <div className={s.end}></div>;
    default:
      return <div>Invalid number</div>;
  }
}
