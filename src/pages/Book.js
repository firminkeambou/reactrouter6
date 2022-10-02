import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Book() {
  // the following hook useParams helps us to get the parameter from the  the url passed
  const { id } = useParams(); //destructure ; useParamas collect data inside url
  const obj = useOutletContext(); // get attributes used with  <Outlet> in the layout shared between children components
  return (
    <div>
      <h1>
        {" "}
        Book {id} / {obj.hello}{" "}
      </h1>
    </div>
  );
}

export default Book;
