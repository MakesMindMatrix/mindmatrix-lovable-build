
import React from "react";
import { ArrowRight } from "lucide-react";

const PromotionBanner: React.FC = () => {
  return (
    <article className="p-4 text-white bg-blue-700 rounded-2xl">
      <h3 className="text-sm font-bold">
        Get 50% Off on MindMatrix Genesis Subscription!
      </h3>
      <p className="mt-5 text-xs opacity-80">
        Hurry ends in 2 days
      </p>
      <button className="flex items-center justify-center gap-1.5 px-3 py-3 mt-5 w-full text-base font-medium text-blue-700 bg-white rounded-xl hover:bg-blue-50 transition-colors">
        <span>Start Now</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </article>
  );
};

export default PromotionBanner;
