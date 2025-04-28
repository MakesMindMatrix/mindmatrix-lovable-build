
import { Day1Widget, Day2OnwardsWidget, WidgetsDatabase } from "./types";

// This simulates the database until connected to a real backend
export const widgetsDb: WidgetsDatabase = {
  day1_widgets_data: [],
  day2onwards_widgets_data: [
    {
      widget_id: "performance_summary_001",
      widget_name: "Performance Summary",
      widget_code_file: "performance/index.ts",
      widget_content: "Shows user's performance metrics and progress",
      associated_zuno_reply_id: "zuno_performance_001",
      day: 2
    },
    {
      widget_id: "skill_momentum_001",
      widget_name: "Skill Momentum",
      widget_code_file: "skill_momentum/index.ts",
      widget_content: "Displays skill progress and goals in a radar chart",
      associated_zuno_reply_id: "zuno_skill_momentum_001",
      day: 2
    },
    {
      widget_id: "engagement_summary_001",
      widget_name: "Engagement Summary",
      widget_code_file: "engagement_summary/index.ts",
      widget_content: "Shows user's engagement metrics and consistency",
      associated_zuno_reply_id: "zuno_engagement_001",
      day: 2
    }
  ]
};

// Widget registry to map widget_id to component
export const getWidgetById = (widgetId: string) => {
  // First check day1 widgets
  const day1Widget = widgetsDb.day1_widgets_data.find(
    widget => widget.widget_id === widgetId
  );
  
  if (day1Widget) {
    // Dynamic import of the widget component
    return import(`./day1_widgets/${day1Widget.widget_code_file}`);
  }
  
  // Then check day2+ widgets
  const day2Widget = widgetsDb.day2onwards_widgets_data.find(
    widget => widget.widget_id === widgetId
  );
  
  if (day2Widget) {
    // Dynamic import of the widget component
    return import(`./day2onwards_widgets/${day2Widget.widget_code_file}`);
  }
  
  return null;
};

// Function to register widgets in the registry
export const registerWidget = (widget: Day1Widget | Day2OnwardsWidget) => {
  if (widget.day === 1) {
    widgetsDb.day1_widgets_data.push(widget as Day1Widget);
  } else {
    widgetsDb.day2onwards_widgets_data.push(widget as Day2OnwardsWidget);
  }
};
