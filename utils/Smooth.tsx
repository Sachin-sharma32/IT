import React from "react";
import { motion } from "framer-motion";

export interface SmoothProps {
    children: React.ReactNode
}

const Smooth = ({ children }: SmoothProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default Smooth;
