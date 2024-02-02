import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "I am Graphic Designer",
            "Sometimes i am a dreamer.....",
            "Also Cat Lover...",
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
