import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

const badges = [
  {
    label: "Mail",
    href: "mailto:noahcousins.dev@gmail.com",
  },
  {
    label: "Github",
    href: "https://github.com/noahcousins",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noahcousins/",
  },
];

const ContactBadges = () => {
  return (
    <div className="flex gap-2">
      {badges.map((badge) => (
        <Link target="_blank" href={badge.href} key={badge.label}>
          <Badge
            variant="secondary"
            className="hover:bg-primary/20 hover:text-white"
          >
            {badge.label} <ArrowUpRight size={24} />
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default ContactBadges;
