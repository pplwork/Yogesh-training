import React from "react";

const Contact = (props) => {
  // Programmatic Redirects
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla
        sed in ipsa deserunt facere minima, culpa sit quia nobis dignissimos
        repellendus aperiam suscipit soluta velit, iure fuga, adipisci
        inventore.
      </p>
    </div>
  );
};

export default Contact;
