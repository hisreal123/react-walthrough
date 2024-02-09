import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="py-3 text-secondary" id="welcome">
      <h1 className="text-2xl text-secondary font-bold  "> Get Started </h1>
      <h2 className="">
        What when we have to seperate fight betwen ReactJs and AngularJs?
      </h2>
      <br />
      <p className="leading-loose">
        This walkthroug is a comparision between ReactJs and AngulaJs both of
        which are powerful JavaScript libraries for building user interfaces,
        but they differ in their approach towards the problem space. I am here
        to help you with understand how React works and the Most features of it
        by building a blog application - <i>it's a small </i>, I will guild you
        through development process ensuring that you understand the fundamental
        building blocks of React.
      </p>
      <p className="leading-loose my-10">
        But first we've got to look at both tools or whatever you might love to
        call it, let's start with what each tool offers.
      </p>
      <p className="leading-loose my-10">
        Angular and React are two popular JavaScript frameworks for building
        dynamic and{" "}
        <i>
          single-page applications <b>SPA</b>
        </i>
        . both are designed to solve similar front-end problems, have different
        philosophies and approaches.{" "}
      </p>
      <h2 className="font-bold text-xl mb-2">AngularJs</h2>
      <p className="leading-loose">
        Angular is a full-featured, opinionated framework that provides a{" "}
        <b className="mr-1">complete</b>
        solution for building large-scale applications. includes features such
        as data-binding, dependency injection, and component-based architecture
        out of the box. Angular is known for its steep learning curve, but it
        offers a lot of power and flexibility to developers who are willing to
        invest the time to learn it. React, on the other hand, is a library for
        building user interfaces. It is focused on the view layer and is often
        used in conjunction with other libraries or frameworks to build complete
        applications.
      </p>
      <h2 className="font-bold text-xl my-3 mt-7"> ReactJs </h2>
      <p className="leading-loose">
        React is known for its simplicity and ease of use, as well as its
        emphasis on reusable components and one-way data binding. When it comes
        to choosing between Angular and React, it is not simply a matter of
        personal preference. Both frameworks have their own strengths and
        weaknesses, and the choice between them will depend on the specific
        needs of your project. In this article, we will build the same
        application twice, once with Angular and then again with React, to
        compare and contrast their features and capabilities. We will cover
        topics such as data-binding, state management, dependency injection, and
        component-based architecture, and we will discuss the pros and cons of
        each framework in the context of real-world applications. By the end of
        this article, you will have a better understanding of the key
        differences between Angular and React, and you will be able to make an
        informed decision about which framework is the best fit for your next
        project.
      </p>
    </div>
  );
};

export default Welcome;
