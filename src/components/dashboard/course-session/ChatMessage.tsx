
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
      className={`overflow-hidden absolute left-2/4 z-0 px-5 py-4 max-w-full tracking-tight leading-none ${isNotification ? "bg-indigo-300" : "bg-white"} rounded-xl border-2 border-white border-solid -translate-x-2/4 shadow-[0px_1px_30px_rgba(69,42,124,0.1)] top-[47px] translate-y-[0%] w-[620px]`}
    >
      <div className="flex gap-4 items-start w-full max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-2 justify-between items-start w-full basis-0 min-w-60 max-md:max-w-full">
          <img
            src={avatarSrc}
            className="object-contain shrink-0 aspect-square rounded-[100px] w-[45px]"
            alt="Avatar"
          />
          <div className="flex flex-col min-w-60 w-[521px] max-md:max-w-full">
            <p className="self-start text-base font-semibold text-center max-md:max-w-full">
              {message}
            </p>
            {subtext && <p className="text-sm font-medium">{subtext}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
