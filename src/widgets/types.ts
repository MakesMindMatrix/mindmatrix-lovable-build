
// Widget database schema types

export interface WidgetBase {
  widget_id: string;
  widget_name: string;
  widget_code_file: string;
  widget_content: string;
  associated_zuno_reply_id: string;
  activation_trigger?: string;
}

// Type for day1 widgets
export interface Day1Widget extends WidgetBase {
  // Day 1 specific properties can be added here
  day: 1;
}

// Type for day2+ widgets
export interface Day2OnwardsWidget extends WidgetBase {
  // Day 2+ specific properties can be added here
  day: number; // 2 or higher
}

// Union type for all widgets
export type Widget = Day1Widget | Day2OnwardsWidget;

// Mock database structure (for frontend representation)
export interface WidgetsDatabase {
  day1_widgets_data: Day1Widget[];
  day2onwards_widgets_data: Day2OnwardsWidget[];
}
