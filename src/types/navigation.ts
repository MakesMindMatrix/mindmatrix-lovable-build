
import { ReactNode } from "react";

export interface NavigationItemProps {
  icon: string;
  label: string;
  isActive: boolean;
}

export interface NavigationSectionProps {
  title: string;
  children: ReactNode;
}
