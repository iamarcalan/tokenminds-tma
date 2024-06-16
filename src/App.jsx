import { useState } from "react";
import "./App.css";
import MainHeader from "./components/post/MainHeader";
import PostsList from "./components/post/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader createPost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          stopPosting={hideModalHandler}
        ></PostsList>
      </main>
    </>
  );
}

export default App;
