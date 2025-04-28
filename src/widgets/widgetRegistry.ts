
import { Day1Widget, Day2OnwardsWidget, WidgetsDatabase } from "./types";

// This simulates the database until connected to a real backend
export const widgetsDb: WidgetsDatabase = {
  day1_widgets_data: [],
  day2onwards_widgets_data: []
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
