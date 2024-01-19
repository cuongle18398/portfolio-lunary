import React from "react";
import { motion, AnimatePresence } from "framer-motion"

function Pre(props) {

  return (
    <AnimatePresence>
      {props.load && (
        <motion.div id={props.load ? "preloader" : "preloader-none"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  )
}

export default Pre;
