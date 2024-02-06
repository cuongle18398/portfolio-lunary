import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Sometimes i am a dreamer.....",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
}

export default Type;
