import { Link } from "react-router-dom";

const Credits = () => {
  return (
    <>
      <h1>Credits</h1>
      <div className="flex flex-col">
        <Link target="_blank" to="https://angularcheatsheet.com/data-binding/">
          https://angularcheatsheet.com/data-binding/
        </Link>
        <Link
          target="_blank"
          to="http://university.io/angular-2-data-binding-explained/"
        >
          university.io/angular-2-data-binding-explained/
        </Link>
        <Link target="_blank" to="https://joshwcomeau.com ">
          joshwcomeau.com
        </Link>
      </div>
    </>
  );
};

export default Credits;
