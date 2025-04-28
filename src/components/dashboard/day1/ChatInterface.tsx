
import React from "react";

const ChatInterface: React.FC<{ simplified?: boolean }> = ({ simplified = false }) => {
  if (simplified) {
    return (
      <section className="relative flex flex-col h-full overflow-hidden rounded-[15px] bg-gradient-to-br from-[#E1E8FF] via-[#7BA4FC] to-[#3366FF]" />
    );
  }

  return (
    <section className="relative flex flex-col h-full overflow-hidden rounded-[15px] bg-gradient-to-br from-[#E1E8FF] via-[#7BA4FC] to-[#3366FF]">
      <div className="flex-1 overflow-y-auto px-20 py-12 max-md:px-5">
        <div className="max-w-full w-[766px] mx-auto">
          <div className="flex flex-col text-white max-md:mr-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/0685739e32365974c5177746c7492ad6c928a76e"
              className="object-contain self-center aspect-square rounded-[64px] shadow-[0px_47px_13px_rgba(0,0,0,0)] w-[68px]"
              alt="AI assistant avatar"
            />

            <p className="mt-10 text-2xl font-medium tracking-tight leading-8 max-md:max-w-full">
              Hey Divyam! 🌟 Before we close today's onboarding, let me give you a
              quick warm hug of guidance! Ready for your journey to begin?
            </p>

            <div className="flex flex-col mt-10 w-full min-h-[200px] max-md:max-w-full">
              <div className="flex gap-4 items-center self-start text-lg font-semibold">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/26516d29adbf0fa2cd9f7f274643339a32b8f7e6"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="Select icon"
                />
                <h3 className="self-stretch my-auto">
                  Select to continue conversation
                </h3>
              </div>

              <div className="mt-5 w-full text-base font-medium max-md:max-w-full">
                <ChatOption text="Yes!" />
                <ChatOption text="I think so" />
                <ChatOption text="Tell me more" />
              </div>
            </div>

            <div className="flex flex-wrap items-start self-center mt-10 text-xs font-medium text-cyan-950 max-md:max-w-full">
              <div className="flex shrink-0 h-[26px] min-w-60 w-[648px]" />
              <button className="gap-2.5 self-stretch p-2.5 bg-white rounded-2xl">
                Tell me more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 mx-auto w-[766px] max-w-[90%]">
        <div className="flex overflow-hidden z-10 flex-col px-5 pt-5 pb-3 rounded-3xl shadow-[0px_1px_30px_rgba(69,42,124,0.1)] bg-white/50 backdrop-blur-md text-zinc-400">
          <input
            type="text"
            placeholder="Type something..."
            className="self-start bg-transparent outline-none"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/f70fb6d9ff44c0504e3bb6d42110108024d88fe8"
            className="object-contain self-end mt-3.5 w-9 aspect-square rounded-[100px] shadow-[0px_1px_30px_rgba(69,42,124,0.1)]"
            alt="Send message"
          />
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
