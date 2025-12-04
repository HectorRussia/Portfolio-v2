import React from "react"
import { motion } from "framer-motion"

const draw: any = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 2.2,
            bounce: 0,
            repeat: Infinity,
            repeatDelay: 3, 
          },
          opacity: { delay, duration: 0.07 },
        },
      };
    },
  };

export default function PathDrawing() {
    return (
        <>
                <div style={container}>
                    <motion.svg
                                width="100%"
                                height="auto"
                                viewBox="0 0 950 300"
                                preserveAspectRatio="xMidYMid meet"
                                initial="hidden"
                                animate="visible"
                                style={image}>
            
            <motion.path
                d="M20 250 L20 50 L70 50 Q95 50 95 100 Q95 150 70 150 L20 150" 
                stroke="#ff0088"
                variants={draw}
                custom={1}
                style={shape}
            />{/* P */}
            <motion.path
                d="M150 130 A55 90 0 1 1 150 150 Z"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            /> {/* O */}
             <motion.path
                d="M320 250 L315 50 L400 250 L400 50" 
                stroke="#ff0088"
                variants={draw}
                custom={3}
                style={shape}
            /> {/* N */}
            <motion.path
                d="M470 250 L470 50 M470 150 L520 50 M470 150 L520 250" 
                stroke="#4ff0b7"
                variants={draw}
                custom={4}
                style={shape}
            /> {/* K */}

            <motion.path
                d="M570 250 L570 50 M570 50 L620 50 Q645 50 645 100 Q645 150 620 150 L570 150 M570 150 L645 250" 
                stroke="#ff0088"
                variants={draw}
                custom={5}
                style={shape}
            /> {/* R */}

            <motion.path
                d="M710 250 L710 50"  
                stroke="#4ff0b7"
                variants={draw}
                custom={6}
                style={shape}
            /> {/* I */}

            <motion.path
                d="M750 50 L900 50 M820 50 L820 255" 
                stroke="#ff0088"
                variants={draw}
                custom={7}
                style={shape}
            /> {/* T */}

        </motion.svg>
        </div>
        </>
    );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    boxSizing: "border-box",
};

const image: React.CSSProperties = {
    width: "min(80vw, 900px)",
    height: "auto",
    display: "block",
};

const shape: React.CSSProperties = {
    strokeWidth: 15,
    strokeLinecap: "round",
    fill: "transparent",
    
}
