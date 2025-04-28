
import React from "react";

interface BackgroundContainerProps {
  children: React.ReactNode;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
}) => {
  return (
    <section className="flex relative flex-col justify-center px-96 py-20 mt-3 min-h-[732px] rounded-[40px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/5b2ee47fe620f527f5500f85a015cddd18ce0c0d?placeholderIfAbsent=true"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative max-w-full w-[611px]">{children}</div>
    </section>
  );
};

export default BackgroundContainer;
