
import { ReactNode } from "react";

export interface NavigationItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
}

export interface NavigationSectionProps {
  title: string;
  items: NavigationItemProps[];
  className?: string;
}
