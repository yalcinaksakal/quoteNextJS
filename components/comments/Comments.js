import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useRouter().query;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
    setIsAddingComment(false);
  }, [sendRequest, quoteId]);

  let comments;
  //   loading
  if (status === "pending") comments = <LoadingSpinner />;

  //completed
  if (status === "completed" && loadedComments && loadedComments.length > 0)
    comments = <CommentsList comments={loadedComments} />;

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  )
    comments = <p>No comments added yet</p>;

  return (
    <section className={classes.comments}>
      {!isAddingComment && (
        <button className="centered" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      <h2>User Comments</h2>
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
