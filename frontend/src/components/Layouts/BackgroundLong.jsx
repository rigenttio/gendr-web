import React from "react";

const BackgroundLong = (props) => {
  const { children } = props;
  return (
    <div style={{ backgroundImage: "url('/assets/front-background/background-landingpage.png')", backgroundPositionY: "-6px" }} className="min-h-screen bg-top bg-cover bg-no-repeat">
      {children}
    </div>
  );
};

export default BackgroundLong;
