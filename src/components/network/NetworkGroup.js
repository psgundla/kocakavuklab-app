import { motion } from "framer-motion";
import PageHeader from "../common/PageHeader";

const sliderAnimation = {
  animate: {
    x: ["0%", "-50%"],
    transition: { ease: "linear", duration: 80, repeat: Infinity }
  }
};

const NetworkGroup = ({ group, isFirst }) => {
  const repeatedItems = [...group.items, ...group.items];

  return (
    <section className={`w-full max-w-7xl px-4 overflow-hidden ${isFirst ? "" : "mt-12"}`}>
      <PageHeader title={group.title} />
      <motion.div className="flex w-max" variants={sliderAnimation} animate="animate">
        {repeatedItems.map((item, index) => (
          <a
            key={`${item.id}-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center p-4"
            aria-label={item.title}
          >
            <img
              src={item.logo}
              alt={item.title}
              className="w-64 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default NetworkGroup;
