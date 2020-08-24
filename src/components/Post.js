import React from "react";

const Post = ({ list, loading }) => {
  if (loading) {
    return <h2>Loading</h2>;
  } else {
    return (
      <>
        {list.map((value, index) => {
          return (
            <div className="post">
              <h2>
                {value.id}.{value.title}
              </h2>

              <p key={index}>{value.body}</p>
            </div>
          );
        })}
      </>
    );
  }
};

export default Post;
