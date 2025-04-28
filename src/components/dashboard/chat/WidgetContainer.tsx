
import React, { useEffect, useState } from "react";
import { getWidgetById } from "@/widgets/widgetRegistry";

interface WidgetContainerProps {
  widgetId: string;
  widgetProps?: Record<string, any>;
}

export const WidgetContainer: React.FC<WidgetContainerProps> = ({ 
  widgetId,
  widgetProps = {} 
}) => {
  const [Widget, setWidget] = useState<React.ComponentType<any> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWidget = async () => {
      try {
        setLoading(true);
        const widgetModule = await getWidgetById(widgetId);
        
        if (!widgetModule) {
          setError(`Widget with ID ${widgetId} not found`);
          return;
        }
        
        setWidget(() => widgetModule.default);
      } catch (err) {
        console.error("Failed to load widget:", err);
        setError(`Failed to load widget: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setLoading(false);
      }
    };

    loadWidget();
  }, [widgetId]);

  if (loading) {
    return <div className="p-4 bg-gray-50 rounded-md animate-pulse">Loading widget...</div>;
  }

  if (error) {
    return <div className="p-4 bg-red-50 text-red-600 rounded-md">{error}</div>;
  }

  if (!Widget) {
    return null;
  }

  return <Widget widget_id={widgetId} {...widgetProps} />;
};
