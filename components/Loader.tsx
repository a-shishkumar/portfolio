'use client';

import { motion } from 'framer-motion';

export default function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
            className="absolute inset-0 z-[40] flex items-center justify-center bg-background/80 backdrop-blur-md"
        >
            <div className="relative flex flex-col items-center">
                {/* Springy animated logo/icon - Smaller & Faster */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1
                    }}
                    className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-black text-lg shadow-xl shadow-primary/20"
                >
                    AK
                </motion.div>

                {/* Smaller Progress bar */}
                <motion.div
                    className="mt-6 w-32 h-0.5 bg-muted rounded-full overflow-hidden"
                >
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="h-full bg-primary"
                    />
                </motion.div>

                <p className="mt-3 text-[8px] font-black uppercase tracking-[0.2em] text-primary/60">
                    Syncing Data
                </p>
            </div>
        </motion.div>
    );
}
