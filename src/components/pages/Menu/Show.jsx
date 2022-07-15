import { useContext } from "react";
import BakeryContext from "./BakeryContext";

function Show() {
  const context = useContext(BakeryContext);
  console.log(context);
  return <div>{context}</div>;
}

export default Show;
