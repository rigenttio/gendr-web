import React from "react";

const BackgroundShortAuth = (props) => {
  const { children } = props;
  return (
    <div style={{ backgroundImage: "url('/assets/front-background/background-auth.png')", backgroundPositionY: "-6px" }} className="min-h-screen bg-top bg-cover bg-no-repeat">
      {children}
    </div>
  );
};

export default BackgroundShortAuth;
