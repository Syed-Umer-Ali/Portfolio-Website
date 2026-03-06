"use client";
import React, { useMemo, useState, useEffect } from "react";

export function Sparkles() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const sparkles = useMemo(() => {
        const count = isMobile ? 30 : 80;
        return [...Array(count)].map((_, i) => ({
            id: i,
            size: Math.random() * (isMobile ? 2 : 4) + 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 5 + 7,
            delay: Math.random() * 10,
            twinkleDelay: Math.random() * 2,
        }));
    }, [isMobile]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {sparkles.map((s) => (
                <div
                    key={s.id}
                    className="absolute rounded-full animate-sparkle"
                    style={{
                        background: "white",
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                        animationDuration: `${s.duration}s`,
                        animationDelay: `${s.delay}s`,
                        filter: "blur(0.3px)",
                        boxShadow: isMobile
                            ? "0 0 10px rgba(0,255,255,0.5)"
                            : "0 0 15px #00ffff, 0 0 25px #00ffff, 0 0 35px white",
                    }}
                >
                    {/* Inner twinkle core */}
                    <div
                        className="w-full h-full rounded-full animate-twinkle"
                        style={{
                            background: "white",
                            boxShadow: "0 0 10px #00ffff",
                            animationDelay: `${s.twinkleDelay}s`
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
