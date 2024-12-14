import React from "react";
import { motion } from "motion/react"
export const TechnologyCard: React.FC<{image: string;title: string;}> = ({ image, title }) => {
return(
    <motion.div 
    style={{ marginTop: "5%", objectFit: "contain" }} 
    initial={{ scale: 0 }} 
    whileInView={{ scale: 1 }}>        
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
}