
export interface ResourceItem {
  id: string;
  type: string;
  title: string;
  pages?: number;
  duration?: string;
  videoId?: string;
}

export interface Task {
  id: string;
  title: string;
  due: string;
}
