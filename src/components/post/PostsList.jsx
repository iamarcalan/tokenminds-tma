import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
function PostsList({ isPosting , stopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal close={stopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Ali" body="Naghiii" />
      </ul>
    </>
  );
}

export default PostsList;
