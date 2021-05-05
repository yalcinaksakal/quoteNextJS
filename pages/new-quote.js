import { useEffect } from "react";

import { useRouter } from "next/router";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const NewQuote = () => {
  const { sendRequest, status, error } = useHttp(addQuote);

  const router = useRouter();

  useEffect(() => {
    let timeout = null;
    if (status === "completed" && !error) {
      timeout = setTimeout(() => router.push("./"), 1000);
    }
    return () => (timeout ? clearTimeout(timeout) : null);
  }, [status, router]);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  };

  const message =
    status === "completed" && !error
      ? "Successfully added"
      : `${error ? error : "Adding quote..."}`;

  return (
    <>
      {status ? (
        <>
          {status === "pending" && <LoadingSpinner />}
          <p style={{ textAlign: "center", color: error ? "red" : "#008080" }}>
            {message}
          </p>
        </>
      ) : (
        <QuoteForm onAddQuote={addQuoteHandler} />
      )}
    </>
  );
};

export default NewQuote;
