import { motion } from "framer-motion";
function SecondSectionHome() {
  return (
    <section className="bg-skill bg-fixed bg-cover bg-no-repeat bg-center w-full max-w-[1500px]">
      <div className="overlay  flex flex-col gap-10 p-10 bg-green-gradient w-full lg:flex-row lg:justify-center">
        <div className="flex gap-10 items-center ">
          <motion.div
            className="w-full"
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            <img
              className="lg:grayscale lg:hover:grayscale-0 transition-all"
              src="/assets/nextjs-1024x618.png"
              width={300}
              height={300}
              alt="Logo Next.js"
            />
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            <img
              className="lg:grayscale lg:hover:grayscale-0 transition-all"
              src="/assets/nodejs.webp"
              width={300}
              height={300}
              alt="Logo Next.js"
            />
          </motion.div>
        </div>
        <div className="flex gap-10 items-center ">
          <motion.div
            className=""
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            <img
              className="lg:grayscale lg:hover:grayscale-0 transition-all"
              src="/assets/tailwind-css.webp"
              width={350}
              height={350}
              alt="Logo Next.js"
            />
          </motion.div>

          <motion.div
            className=""
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            <img
              className="lg:grayscale lg:hover:grayscale-0 transition-all"
              src="/assets/typescript-icon.webp"
              width={100}
              height={100}
              alt="Logo TypeScript"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SecondSectionHome;
