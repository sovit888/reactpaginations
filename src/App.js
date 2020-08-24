import React, { useState, useEffect } from "react";
import Child from "./components/Child";
import Post from "./components/Post";
import axios from "axios";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(7);
  useEffect(() => {
    setLoading(true);
    const fetchpost = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setList(res.data);
      setLoading(false);
    };
    fetchpost();
  }, []);
  const indexofLastpost = currentpage * postperpage;
  const indexofFirstpost = indexofLastpost - postperpage;
  const currentPost = list.slice(indexofFirstpost, indexofLastpost);
  const setCurrent = (value) => {
    setCurrentpage(value);
  };
  return (
    <>
      <h1>React Simple paginations</h1>
      Please select the post per pages
      <input
        type="number"
        onChange={(e) => {
          setPostperpage(e.target.value);
        }}
        min={2}
        max={20}
        placeholder={postperpage}
      />
      <Post list={currentPost} loading={loading} />
      <Child
        setCurrentpage={setCurrent}
        postperpage={postperpage}
        length={list.length}
      />
    </>
  );
};

export default App;
