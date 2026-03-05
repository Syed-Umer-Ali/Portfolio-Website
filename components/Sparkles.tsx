"use client";
import React, { useMemo } from "react";

export function Sparkles() {
    const sparkles = useMemo(() =>
        [...Array(80)].map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 2,
            left: Math.random() * 100,
            duration: Math.random() * 5 + 7,
            delay: Math.random() * 10,
            twinkleDelay: Math.random() * 2,
        })), []);

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
                        animationDuration: `${s.duration}s`,
                        animationDelay: `${s.delay}s`,
                        filter: "blur(0.3px)",
                        boxShadow: "0 0 15px #00ffff, 0 0 25px #00ffff, 0 0 35px white",
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
