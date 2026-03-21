'use client';

import { motion } from 'framer-motion';

export default function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
            className="fixed inset-0 z-[100] min-h-screen flex items-center justify-center bg-background/90 backdrop-blur-sm"
        >
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin shadow-[0_0_20px_rgba(var(--primary),0.2)]" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary animate-pulse">
                    Loading
                </p>
            </div>
        </motion.div>
    );
}
