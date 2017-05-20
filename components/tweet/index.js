import { h, Component } from "preact";
import style from "./style";

export default (props) => {
  return <div>
    <h3>@{props.data.user}</h3>
    <p>{props.data.text}</p>
    <small>{props.data.created_at}</small>
  </div>;
}
