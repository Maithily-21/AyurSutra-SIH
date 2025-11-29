import { FaRegHandPointRight, FaRobot } from "react-icons/fa";
import "../Styles/Chatbot.css";
import "animate.css";
import { useContext } from "react";
import Chatbot from "./Chatbot";
import { ChatbotOpen } from "./ChatbotOpen";
import { motion } from "framer-motion";

export const ChatbotButton = () => {
  const { open, setOpen } = useContext(ChatbotOpen);
  return (
    <div className="">
      {!open ? (
        <div className="flex flex-row justify-center items-center flex-wrap">
          <motion.div
            className="text-md font-playpen z-20 bottom-[11%] lg:right-[13%] fixed rounded-xl px-4 py-2 self-center bg-orange-100 text-black border border-orange-300 shadow-2xl md:flex flex-row flex-wrap gap-3 items-center chatbot-helper hidden select-none"
            animate={{ x: [0, -30, 0] }}
            initial={{ x: -30 }}
            transition={{ duration: 2, repeatType: "loop", repeat: Infinity }}
          >
            See Your Dosha
            <FaRegHandPointRight fontSize={20} />
          </motion.div>
          <div className="chatbot-btn-background chatbot-btn w-40 h-20 p-40 opacity-20 animate__animated animate__zoomIn  animate__infinite"></div>
          <button
            className="chatbot-btn"
            type="button"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FaRobot fontSize={20} />
            <span>Chat Bot</span>
          </button>
        </div>
      ) : (
        <Chatbot open={open} set={setOpen} />
      )}
    </div>
  );
};
