import React, { FC } from "react";
import Post from "./Post/Post";

import useStyles from './styles'

const Posts: FC = () => {
     const classes = useStyles();

  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  );
};

export default Posts;
