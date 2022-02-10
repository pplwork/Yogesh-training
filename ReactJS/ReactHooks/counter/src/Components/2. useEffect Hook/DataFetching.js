import React, { useState, useEffect } from "react";
const axios = require("axios");

const DataFetching = () => {
  //   const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  const handleFetchBtn = () => {
    setIdFromBtnClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtnClick]);

  return (
    <div className="center">
      <input
        className="center"
        type="number"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button className="btn" onClick={handleFetchBtn}>
        Fetch Post
      </button>

      <div className="center">{post.title}</div>
      {/* <ul>
        {posts.map((post) => {
          return (
            <li style={{ marginLeft: "1rem" }} key={post.id}>
              {post.title}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default DataFetching;
