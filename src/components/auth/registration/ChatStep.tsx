
import React from "react";
import { motion } from "framer-motion";

interface ChatStepProps {
  title: string;
  avatarSrc: string;
  children?: React.ReactNode;
  isCompleted?: boolean;
  showTitle?: boolean;
}

export const ChatStep: React.FC<ChatStepProps> = ({
  title,
  avatarSrc,
  children,
  isCompleted = false,
  showTitle = true
}) => {
  return (
    <motion.div 
      className="w-full max-w-md mx-auto flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col items-center w-full">
        {showTitle && (
          <>
            <motion.img
              src={avatarSrc}
              className="object-contain w-20 h-20 rounded-full mb-6"
              alt="Chat avatar"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.h2 
              className="text-3xl font-medium tracking-tight text-center text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {title}
            </motion.h2>
          </>
        )}
        
        {children && (
          <motion.div 
            className="w-full"
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
