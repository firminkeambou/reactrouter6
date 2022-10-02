import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function BookLayout() {
  //useSearhParams gets its values from the url, useful when filtering a list also
  /*The useSearchParams hook is used to read and modify the query string in the URL for the current location
The setSearchParams function works like navigate, but only for the search portion (started with ?x=value) of the URL. Also note that the second arg to setSearchParams is the same type as the second arg to navigate.
*/
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  console.log(searchParams.get("n"));

  const numberSearhParam = searchParams.get("n");
  //----------------------------------------
  const [number, setNumber] = useState(3);
  return (
    <>
      {" "}
      <Link to="/books/1">Book1</Link> <br />
      <Link to="/books/2">Book2</Link>
      <br />
      {/** the following is the dynamic link using useState,  this can be very useful when you want to display a document based on what you typed in, this is updated from the input box */}
      <Link to={`/books/${number}`}>Dynamic Book with useState {number} </Link>
      <br />
      {/** the following is the dynamic link using useSearchParam, 
      
      */}
      <Link to={`/books/${numberSearhParam}`}>
        Dynamic Book with useSearchParam (query string from url){" "}
        {numberSearhParam}{" "}
      </Link>
      <br />
      <Link to="/books/new">New Book </Link>
      {/** the following component "Outlet" allows other components(children components),  to be add after the display of this component
      to pass down values to children components , we can can use attribute " context" of the <Outlet /> component. that valu will then be available to be get from the child component using "useOutletContext()" hook
      */}
      <Outlet
        context={{
          hello:
            "Variable passed using outlet to be collected using useOutletContext()",
        }}
      />
      paramUseState
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />{" "}
      <br />
      <br />
      useSearchParams ( BookLayout Component)
      <input
        type="number"
        value={numberSearhParam}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}

export default BookLayout;
