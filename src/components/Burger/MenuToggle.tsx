import React from "react";
import { motion } from "framer-motion";
import type { Variants, SVGMotionProps } from "framer-motion";
import "./styles.css";

interface PathProps extends Omit<SVGMotionProps<SVGPathElement>, 'variants'> {
  variants?: Variants;
}

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fafafa"
    strokeLinecap="round"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (

  <button onClick={toggle} className="md:ml-4 fixed buttonBurger">
    <svg width="30" height="40" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        stroke="#58E6C9"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" stroke="#58E6C9"/>
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        stroke="#58E6C9"
      />
    </svg>
  </button>
);
