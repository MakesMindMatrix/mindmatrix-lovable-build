
import React from "react";
import { motion } from "framer-motion";

interface ChatStepProps {
  title: string;
  avatarSrc: string;
  children?: React.ReactNode;
  isCompleted?: boolean;
}

export const ChatStep: React.FC<ChatStepProps> = ({
  title,
  avatarSrc,
  children,
  isCompleted = false
}) => {
  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src={avatarSrc}
          className="object-contain aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
          alt="Chat avatar"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.h2 
          className="self-stretch mt-5 text-3xl tracking-tight leading-10 text-center text-white max-md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        
        {children && (
          <motion.div 
            className="mt-5 w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
