// import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import classes from "./QuoteForm.module.css";

const QuoteForm = props => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const formFocusHandler = () => {
    setIsEntering(true);
  };
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };
  // block rooutng if isEntering
  const router = useRouter();
  useEffect(() => {
    console.log(isEntering);
    const routeChangeStart = url => {
      
      if (isEntering) {
        router.events.emit("routeChangeError");
        throw "Abort route change. Please ignore this error.";
      }
    };

    router.events.on("routeChangeStart", routeChangeStart);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
    };
  }, [isEntering]);

  return (
    <Card>
      <form
        onFocus={formFocusHandler}
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishEnteringHandler} className="btn">
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
