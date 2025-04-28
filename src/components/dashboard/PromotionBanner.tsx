
import React from "react";
import { ArrowRight } from "lucide-react";

const PromotionBanner: React.FC = () => {
  return (
    <div className="bg-blue-600 p-4 rounded-xl text-white">
      <h3 className="font-bold text-sm">
        Get 50% Off on MindMatrix Genesis Subscription!
      </h3>
      <p className="mt-3 text-xs text-white/80">
        Hurry ends in 2 days
      </p>
      <button className="mt-4 w-full bg-white text-blue-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
        <span>Start Now</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PromotionBanner;
