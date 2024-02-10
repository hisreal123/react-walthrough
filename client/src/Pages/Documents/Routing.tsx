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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Routing;
