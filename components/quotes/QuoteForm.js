// import { useRouter } from "next/router";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import classes from "./QuoteForm.module.css";

const QuoteForm = props => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  // const [isEntering, setIsEntering] = useState(false);
  //0 false, 1 ture, 2 untoched
  const [isValidText, setisValidText] = useState(2);
  const [isValidAuthor, setisValidAuthor] = useState(2);
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value.trim();
    const enteredText = textInputRef.current.value.trim();
    setisValidAuthor(enteredAuthor ? 1 : 0);
    setisValidText(enteredText ? 1 : 0);
    if (!enteredAuthor || !enteredText) return;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  // const formFocusHandler = () => {
  //   setIsEntering(true);
  // };
  // const finishEnteringHandler = () => {
  //   setIsEntering(false);
  // };
  // block roouting if isEntering
  // const router = useRouter();
  // useEffect(() => {
  //   console.log(isEntering);
  //   const routeChangeStart = url => {
  //     if (isEntering) {
  //       router.events.emit("routeChangeError");
  //       throw "Abort route change. Please ignore this error.";
  //     }
  //   };

  //   router.events.on("routeChangeStart", routeChangeStart);

  //   return () => {
  //     router.events.off("routeChangeStart", routeChangeStart);
  //   };
  // }, [isEntering]);

  return (
    <Card>
      <form
        // onFocus={formFocusHandler}
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            ref={authorInputRef}
            className={isValidAuthor ? "" : classes.invalid}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            rows="5"
            ref={textInputRef}
            className={isValidText ? "" : classes.invalid}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button
            // onClick={finishEnteringHandler}
            className="btn"
          >
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
