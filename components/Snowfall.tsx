"use client";

import React, { useEffect, useState } from 'react';
import styles from './Snowfall.module.css';

const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState<number[]>([]);

    useEffect(() => {
        // Generate a fixed number of snowflakes on the client side to avoid hydration mismatch
        const flakes = Array.from({ length: 50 }, (_, i) => i);
        setSnowflakes(flakes);
    }, []);

    return (
        <div className={styles.snowContainer}>
            {snowflakes.map((i) => (
                <div
                    key={i}
                    className={styles.snowflake}
                    style={{
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: Math.random(),
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
};

export default Snowfall;
