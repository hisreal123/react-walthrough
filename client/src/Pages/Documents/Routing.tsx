import { Link } from "react-router-dom";
import { FullRouting } from "../../components/AllCodes";
import AllSyntax from "../../components/AllSyntax";

const Routing = () => {
  const NestedRouting = `
        <Route path="blog">
              <Route index element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="register" element={<Register />} />
        </Route>`;
  return (
    <div className="" id="routing">
      <h1>Routing</h1>
      <p className="leading-loose">
        Either Client-side routing or Server-side routing, what is routing?{" "}
      </p>
      <p className="leading-loose my-3">
        Routing as an important part of a Single-Page-Application is the process
        of redirecting a user to a diffrent paged based on their action or
        request. - curiously, we could ask, how do we get to pageX and from
        pageA and to pageZ.
      </p>

      <p className="leading-loose my-3">
        Unlike NextJs which handles routing out of the box for use, we use{" "}
        <i>React Router</i> which is a Third-party lip to perform routing
        operations in React.
        <AllSyntax code="npm install react-router-dom" />
      </p>

      <div className="concept mt-7">
        <h4 className="mb-3 font-bold"> Key Concepts</h4>

        <div className="leading-loose">
          <ul>
            <li>
              <b>Components</b>: Routing in React revolves around rendering
              different components based on the URL path. Each route maps to a
              specific component responsible for its view and functionality.
              <AllSyntax code={`<Route index element={<Welcome />} />`} />
            </li>
            <li className="my-3">
              <b>Routes</b>: React Router defines Route components that specify
              the path and the corresponding component to render. You can nest
              routes to create hierarchical structures, representing sections
              and subsections within your app.
              <AllSyntax
                code={`<Route path="routing" element={<Routing />} />`}
              />
            </li>
            <li className="my-3">
              <b>Navigation</b>: Users can navigate between routes using links
              or programmatic navigation. React Router's
              <i className="mr-1">
                <b>Link</b>
              </i>
              component handles internal navigation, while programmatic
              navigation allows code-driven transitions.
              <AllSyntax
                code={` <Link to="/blog/register" className="ml-1"> Register </Link>`}
              />
            </li>
            <li className="my-3">
              <b>Parameters</b>:Nested routes create a hierarchical structure,
              representing sections and subsections within your app. This
              becomes crucial for organizing complex applications with multiple
              levels of navigation.
              <AllSyntax code={`import useParams from "react-router-dom`} />
            </li>
            <li className="my-3">
              <b>Nested Routes</b>:Routes can accept dynamic parameters
              <i className="inline-block">(e.g., /products/:id)</i> that you can
              access within the component using the
              <i className="inline-block">useParams hook</i>. This enables you
              to create detailed views based on specific data.
              <AllSyntax code={NestedRouting} />
            </li>
            <li className="my-3">
              <b>Full Example </b>:
              <AllSyntax code={FullRouting} />
            </li>
            <li className="my-3">
              <b>Explanation:</b>
              <br />

              <span className="my-2 block">
                <b>{"`<BrowserRouter>`"}</b>
                This is a component provided by React Router that wraps our
                entire application and enables routing functionality in our
                React application.
              </span>

              <span className="my-2 block">
                <b>{"`<Routes>`"}</b>
                This is another component provided by React Router that defines
                the routes for our application. Inside <b>{"`<Routes>`"}</b>, we
                specify all the routes available in our application.
              </span>

              <span className="my-2 block">
                <b>{'`path="/"`'}</b>
                This attribute specifies the URL path for the current route. For
                example,
                <b>{' `<Route path="/data-binding">`'}</b>means that this route
                will be active when the URL path matches{" "}
                <b>{"`/data-binding`"}</b>.
              </span>

              <span className="my-2 block">
                <b>{"`element={<Layout />}`"}</b>
                This attribute specifies the component to render when the route
                matches. For example,{" "}
                <b>{"`<Route element={<Welcome />} />`"}</b> means that when the
                URL path matches the current route, the <b>{"`<Welcome />`"}</b>{" "}
                component will be rendered inside the <b>{"`<Layout />`"}</b>{" "}
                component.
              </span>

              <span className="my-2 block">
                <b>{"`<Route index>`"}</b>
                This attribute specifies that the current route is the default
                route when no specific path matches. For example,{" "}
                <b>{"`<Route index element={<Welcome />} />`"}</b>
                means that when the URL path is <b>{"`/`"}</b>, the{" "}
                <b>{"`<Welcome />`"}</b> component will be rendered inside the{" "}
                <b>{"`<Layout />`"}</b> component.
              </span>

              <span className="my-2 block">
                <b>{'`<Route path="*">`'}</b>
                This is a catch-all route that matches any URL path that hasn't
                been matched by other routes. It's typically used to render a
                "Not Found" component when the user navigates to a URL that
                doesn't exist in our application.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <span className="text-xs text-blue-500 hover:text-blue-800 font-bold">
        Refrence:
        <Link
          className="text-blue-500 hover:text-blue-800 font-bold"
          to="https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e"
        >
          https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e
        </Link>
      </span>
    </div>
  );
};

export default Routing;
