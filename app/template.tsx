'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageLoader from '@/components/Loader';

export default function Template({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-[60vh]">
            <AnimatePresence mode="wait">
                {loading && <PageLoader key="loader" />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: loading ? 0 : 1, x: loading ? 50 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
