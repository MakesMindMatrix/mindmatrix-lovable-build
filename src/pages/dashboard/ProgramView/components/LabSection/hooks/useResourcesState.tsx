
import { useState } from "react";

export function useResourcesState() {
  const [resourcesSubTab, setResourcesSubTab] = useState<string>("pre-session");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // Sample PDF URLs for demonstration
  const pdfSamples = [
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "https://www.africau.edu/images/default/sample.pdf"
  ];
  
  return {
    resourcesSubTab,
    setResourcesSubTab,
    selectedVideo,
    setSelectedVideo,
    pdfSamples
  };
}
