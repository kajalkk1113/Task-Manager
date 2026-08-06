import React from "react";

const Home = () => {
  const today = new Date();

  return (
    <div>
      <h1>Welcome user</h1>
      <h2>Date: {`${today.getDate()} - ${today.getMonth() + 1} - ${today.getFullYear()}`}</h2>
    </div>
  );
};

export default Home;