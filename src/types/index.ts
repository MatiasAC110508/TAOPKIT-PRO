import { LucideIcon } from "lucide-react";

export interface NavigationLink {
  href: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  goals: string[];
  image: string;
  icon: LucideIcon;
  color: string;
  border: string;
  accent: string;
}

export interface HighlightFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface OmnichannelStep {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
}

export interface OmnichannelChannel {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export type CimCategoryKey = "advertising" | "promotion" | "publicRelations" | "personalSales" | "directMarketing";

export interface CimDataEntry {
  title: string;
  sub: string;
  icon: LucideIcon;
  gradient: string;
  text: string;
  tactics: string[];
}

export interface PricingItem {
  item: string;
  cost: string;
}

export interface ServiceItem {
  service: string;
  cost: string;
}

export interface GoalItem {
  id: number;
  title: string;
  desc: string;
  tactics: string[];
  color: string;
  iconColor: string;
  borderColor: string;
}

export interface SwotCell {
  id: string;
  text: string;
}

export interface SwotData {
  strengths: SwotCell[];
  weaknesses: SwotCell[];
  opportunities: SwotCell[];
  threats: SwotCell[];
  so: SwotCell[]; // FO -> SO (Strengths-Opportunities)
  wo: SwotCell[]; // DO -> WO (Weaknesses-Opportunities)
  st: SwotCell[]; // FA -> ST (Strengths-Threats)
  wt: SwotCell[]; // DA -> WT (Weaknesses-Threats)
}

export type SegTabKey = "geographic" | "demographic" | "psychographic" | "behavioral";

export interface SegmentationEntry {
  id: string;
  title: string;
  icon: LucideIcon;
  gradient: string;
  color: string;
  bgIcon: string;
  content: React.ReactNode;
}

export interface ReferenceItem {
  text: string;
  href?: string;
}
