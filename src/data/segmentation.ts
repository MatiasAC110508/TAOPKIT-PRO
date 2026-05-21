import React from "react";
import { Activity, Brain, MapPin, Users } from "lucide-react";
import { SegTabKey, SegmentationEntry } from "../types";

export const segmentationData: Record<SegTabKey, Omit<SegmentationEntry, 'content'>> = {
  geographic: {
    id: "geographic",
    title: "Geográfica",
    icon: MapPin,
    gradient: "from-teal-500 to-teal-600",
    color: "text-teal-400",
    bgIcon: "bg-teal-500/10",
  },
  demographic: {
    id: "demographic",
    title: "Demográfica",
    icon: Users,
    gradient: "from-amber-500 to-amber-600",
    color: "text-amber-400",
    bgIcon: "bg-amber-500/10",
  },
  psychographic: {
    id: "psychographic",
    title: "Psicográfica",
    icon: Brain,
    gradient: "from-rose-500 to-rose-600",
    color: "text-rose-400",
    bgIcon: "bg-rose-500/10",
  },
  behavioral: {
    id: "behavioral",
    title: "Conductual",
    icon: Activity,
    gradient: "from-indigo-500 to-indigo-600",
    color: "text-indigo-400",
    bgIcon: "bg-indigo-500/10",
  }
};
