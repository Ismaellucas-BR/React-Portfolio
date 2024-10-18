import React, { useState } from "react";
import { motion } from "framer-motion";
function Modal() {
  const [stateModal, setStateModal] = useState(true);

  function HandleCloseModal() {
    setStateModal(false);
  }

  if (!stateModal) return null;

  return (
    <motion.div
      className="absolute flex flex-col justify-center items-center font-inter top-14 border border-light-green/70 bg-black z-10 w-4/5 h-24 rounded-md p-5 lg:w-1/3 lg:left-1/4"
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ duration: 5, ease: "easeInOut" }}
    >
      <div className="flex justify-end w-full mr-14">
        <h2 onClick={HandleCloseModal} className="cursor-pointer">
          x
        </h2>
      </div>
      <div>
        <h2>
          Esse é um projeto ainda em andamento, peço paciência e compreensão.
        </h2>
      </div>
    </motion.div>
  );
}

export default Modal;
