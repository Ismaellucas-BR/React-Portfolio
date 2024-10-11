import { motion } from "framer-motion";
function MainTitle(props) {
  return (
    <motion.h2
      className="font-sans text-4xl text-center font-semibold text-white underline-half2 relative pb-3"
      initial={{ x: -200 }}
      animate={{ x: [-200, 15, 0] }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {props.whiteText}{" "}
      <span className="text-light-green">{props.greenText}</span>
    </motion.h2>
  );
}

export default MainTitle;
