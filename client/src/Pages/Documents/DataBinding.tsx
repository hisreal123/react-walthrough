import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const DataBinding = () => {
  const code = ` 
        import React from 'react'; 

        function App() {
        const [name, setName] = React.useState('');

        return (
            <input
            value={name}
            onChange={event => {
                setName(event.target.value);
            }}
            />
        );
    }
}
export default App;`;

  return (
    <div>
      <div className="react">
        <h1>Data Binding</h1>
        <p className="mb-2 font-bold">
          How do we explain to a kid what Data binding is? let's go
        </p>

        <p className="leading-loose">
          Data binding is like having a walkie-talkie or a telephone, where both
          you and your friend can talk and listen at the same time, so when one
          of you says something, the other person hears it right away, and if
          your friend talks back, you hear them instantly too!
        </p>

        <h2 className="font-bold text-xl my-3 mt-7"> ReactJs </h2>

        <p className="leading-loose">
          In React, data binding is achieved through a mechanism where the state
          of a component is used to control the value of a form field. which is
          know as <b className="mr-1"> Controlled components</b>
          Controlled components are React compnents that are connected to a form
          field, React manages their state and behaviour. Whenever the user
          types into this input field, the current value of the input will be
          updated in the state of the parent component. This way, any changes
          made by the user directly affect the state of the application.
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            className="text-xs md:text-sms rounded-md border border-black/50 my-3"
          >
            {code}
          </SyntaxHighlighter>
          In this example, the value of the input is controlled by the state
          variable <i>name</i>. The onChange handler updates the state variable
          with the user's input. It's important to note that when you use
          controlled components, you are responsible for managing the state of
          the form fields. This means that you need to make sure that the state
          variable is always up-to-date with the user's input. If you don't do
          this, the form field may become out of sync with the state variable,
          which can lead to unexpected behavior.
        </p>

        <p className="leading-loose">
          It's important to note that when you use controlled components, you
          are responsible for managing the state of the form fields. This means
          that you need to make sure that the state variable is always
          up-to-date with the user's input. If you don't do this, the form field
          may become out of sync with the state variable, which can lead to
          unexpected behavior.
        </p>
      </div>

      <div className="agular">
        <h2 className="font-bold text-xl my-3 mt-7"> Angular Js </h2>

        <p className="leading-loose">
          AngularJS allows automatic synchronization of data between the model
          and the view. This means that when the model changes, the view updates
          automatically, and vice versa.
        </p>

        <span className="font-bold block my-3">
          There are three types of data binding in AngularJS:
        </span>
        <p className="leading-loose mb-3">
          <ul className="text-secondary">
            <li>
              <b>One-way data binding</b>: In this type of data binding, changes
              in the model are reflected in the view, but changes in the view do
              not affect the model. This is the default type of data binding in
              AngularJS.
            </li>
          </ul>
          Two-way data binding: In this type of data binding, changes in the
          model are reflected in the view, and changes in the view are also
          reflected in the model. This is achieved using the ng-model directive.
          Event data binding: In this type of data binding, changes in the model
          are reflected in the view, and changes in the view are reflected in
          the model. This is achieved using the ng-change directive.
        </p>

        <p className="leading-loose my-5">
          Read more about Angular data binding{" "}
        </p>
        <div className="flex flex-col text-sm cursor-pointer">
          <a
            className="text-blue-800 font-bold"
            href="https://angular.io/guide/two-way-binding"
          >
            Angular two-way-binding
          </a>
          <a
            className="text-blue-800 font-bold"
            href="https://angularcheatsheet.com/data-binding/"
          >
            Angular data-binding
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataBinding;
