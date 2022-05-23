import Alert from "react-bootstrap/Alert";

export default function MessageDisplay(props) {
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}
