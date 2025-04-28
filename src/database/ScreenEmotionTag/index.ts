
interface EmotionTag {
  id: string;
  emotion: string;
  confidence: number;
  timestamp: Date;
}

const emotionTags: EmotionTag[] = [];

export const addEmotionTag = (emotion: string, confidence: number) => {
  emotionTags.push({
    id: Math.random().toString(36).substr(2, 9),
    emotion,
    confidence,
    timestamp: new Date()
  });
};

export const getEmotionTags = () => emotionTags;
