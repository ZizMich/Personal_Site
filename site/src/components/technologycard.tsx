import React, { useState } from "react";
import { motion } from "motion/react";

export const TechnologyCard: React.FC<{ image: string; title: string; onclick: Function; }> = ({ image, title, onclick }) => {
    const [isDark, setIsDark] = useState(false);

    const handleClick = () => {
        setIsDark(true);
        onclick();
    };

    return (
        <motion.div
            style={{
                marginTop: "5%",
                objectFit: "contain",
                backgroundColor: isDark ? "rgba(0, 0, 0, 0.5)" : "transparent", // Darken the background
                transition: "background-color 0.3s ease" // Smooth transition
            }}
            initial={{ scale: 0 }}
            onMouseDown={handleClick}
            onMouseUp={()=>setIsDark(false)}
            whileInView={{ scale: 1 }}
        >
            <img
                height="100rem"
                width="auto"
                src={image}
                alt="me"
                style={{ borderRadius: "15px" }}
            />
            <p className="justtext1">{title}</p>
        </motion.div>
    );
};