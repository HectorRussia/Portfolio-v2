import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      // เปิดเมนู - แยก animation sequence
      animate("nav", 
        { transform: "translateX(0%)" },
        { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
      );
      
      animate("li", 
        { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
        { delay: stagger(0.05) }
      );

      // Hamburger animation
      animate("path.top", 
        { d: "M 3 16.5 L 17 2.5" }
      );
      animate("path.middle", { opacity: 0 });
      animate("path.bottom", 
        { d: "M 3 2.5 L 17 16.346" }
      );
    } else {
      // ปิดเมนู
      animate("li", 
        { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
        { delay: stagger(0.05, { from: "last" }) }
      );
      
      animate("nav", 
        { transform: "translateX(100%)" },
        { delay: 0.1 }
      );

      // Reset hamburger
      animate("path.top", 
        { d: "M 2 2.5 L 20 2.5" }
      );
      animate("path.middle", { opacity: 1 });
      animate("path.bottom", 
        { d: "M 2 16.346 L 20 16.346" }
      );
    }
  }, [animate, isOpen]);

  return scope;
}