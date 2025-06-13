import React from "react";
import { cn } from "@/lib/utils";
import { BoxIcon, ShieldCheckIcon, BarChart, TrendingUp, Database, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
const WhatsInsideScalysis = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return;
};
export default WhatsInsideScalysis;