
import React from "react";

interface ChatMessageProps {
  avatarSrc: string;
  message: string;
  subtext?: string;
  isNotification?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  avatarSrc,
  message,
  subtext,
  isNotification = false,
}) => {
  return (
    <div
      className={`absolute left-2/4 z-10 top-[47px] px-5 py-4 max-w-full rounded-xl border border-white/30 -translate-x-2/4 shadow-lg w-[620px] ${
        isNotification ? "bg-indigo-500/30 backdrop-blur-sm" : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="flex gap-4 items-start w-full">
        <img
          src={avatarSrc}
          className="object-contain shrink-0 aspect-square rounded-full w-[45px]"
          alt="Avatar"
        />
        <div className="flex flex-col">
          <p className="text-base font-semibold text-white">
            {message}
          </p>
          {subtext && <p className="text-sm font-medium text-white/80 mt-1">{subtext}</p>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
