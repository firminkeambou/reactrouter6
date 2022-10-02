import {
  Route,
  Routes,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";
import "./styles.css";
function App() {
  const location = useLocation();
  console.log(location);
  /** we can even define routes using  useRoutes hooks as follow */
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      {element} {/**this render routes defined using  useRoutes hook */}
      {/** it's even possible to have many Routes within the same App  as the following shows using the same path
    the following shows en extra content which is displayed each time the path "/books" is called
    */}
      {/** to harcoded a location, use the "location" attribute of "Routes" 
      once this is set, the component will always appear whatever you do
      */}
      <Routes location="/book">
        <Route
          path="/book"
          element={
            <h1>
              {" "}
              Extra content displayed in the same page using the same navigation
              link "/books"
            </h1>
          }
        />
      </Routes>
      <nav>
        <ul>
          <li>
            {/** "replace" attribute : remove the current page I'm on from the navigation history
            so it's no more accessible using the navigation arrow from the browser 
            this is useful in very rare situation;
            "reloadDocument attribute: reload the entire page, not only the routes section of the page;
            "state attribute"  allows to pass data between links, most importantly, the data passed are not displayed in the browser or are not part of the url
            */}
            <Link to="/" replace state="HI FREE">
              {" "}
              Home Link
            </Link>
          </li>
          <li>
            <Link to="/books"> Books</Link>
          </li>
          {/**NavLink works as Link, but it allows us to do specifics things concerning essentially the active state of the link
          it can have as properties "className", "style", "children" . in the following example, we can change "style" by "className"
          */}
          <li>
            <NavLink
              end
              style={({ isActive }) => {
                return isActive ? { color: "green" } : {};
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? " Active NavLink" : " Normal NavLink";
              }}
            </NavLink>
          </li>
          <li>
            {/* if you don't want to use "isActive " attribute straight in the NavLink as above,
            you can just define a class called "active"(styles.css) using normal css and react Navlink component will detect and use that class by default
            - With "end" attribute, you litterally tell the link to stop being considered active once we have clicked on another link
            */}
            <NavLink end to="/">
              Link using default "active" class defined within "styles.css" file
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* technicaly, Link component is an anchor tab (<a> and "href" becomes "to"
      One thing with <Routes> is that, only the code between Routes changes when you click on different link above; which makes navigation very fast
    :id means parameter;
    */}
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        {/** the following is an example of a nested route, everything that comes inside the first route is added to tha main route */}
        {/**As follow,when we pass an element to the parent, by default, only that element is shown up even if children routes are used , it's important when we want to share certain links with all children
        in order to be able to see children routes, add "<Outlet />" at the end of "BookLayout" component 
        if I  just want to share the layout, between certain components, I can just remove  the "path" attribute of the parent component
        */}

        <Route path="/books" element={<BookLayout />}>
          {/** the following is the default component shown when the path is only "/books"  */}
          <Route index element={<BookList />} />{" "}
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* note that , as an element, you can write a complete jsx instead of a component */}
        {/*<Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
  <Route path="/books/new" element={<NewBook />} />*/}
        {/* any not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
