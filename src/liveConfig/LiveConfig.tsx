import { useEffect } from "react";

function LiveConfig() {
  useEffect(() => {
    Twitch.ext.onAuthorized(function (auth) {
      console.log("on Authorize!", auth.token);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      Hello, world. From Live Config Page
    </div>
  );
}

export default LiveConfig;
