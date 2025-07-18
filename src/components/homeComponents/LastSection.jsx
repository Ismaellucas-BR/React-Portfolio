import LinkedinSvg from "../icons/Linkedin";
import GitHubSvg from "../icons/Github";
import { motion } from "framer-motion";
import Instagram from "./Instagram";
function LastSection() {
  return (
    <section className="flex justify-center w-full bg-black bg-opacity-65">
      <div className="w-[95%] flex flex-col items-center justify-between gap-10 px-5 pt-20 pb-5 max-w-[1500px]  h-auto md:flex-row">
        <div>
          <img
            src="/assets/Logo.png"
            width={300}
            height={200}
            alt="Ismael Lucas"
          />
        </div>
        <div className="flex justify-center gap-10">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}>
            <a href="https://www.instagram.com/ismael_lucas36/" target="_blank">
              <Instagram fillone="fill-light-green" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}>
            <a
              href="https://www.linkedin.com/in/ismael-lucas-72bb04196/"
              target="_blank">
              <LinkedinSvg fillone="fill-light-green" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}>
            <a href="https://github.com/Ismaellucas-BR" target="_blank">
              <GitHubSvg fillone="fill-light-green" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LastSection;
