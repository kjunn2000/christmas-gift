"use client";

import React, { useState } from 'react';
import { useWishes } from '@/context/WishContext';
import { Lock, Key, Gift } from 'lucide-react';
import styles from './LockScreen.module.css';

export default function LockScreen() {
    const { unlockApp } = useWishes();
    const [key, setKey] = useState('');
    const [error, setError] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = unlockApp(key);
        if (!success) {
            setError(true);
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <Lock size={48} className={styles.lockIcon} />
                </div>

                <h1 className={styles.title}>Ho Ho Ho! 🎅</h1>
                <p className={styles.subtitle}>
                    This list is checked twice! Enter the secret magic word to enter.
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={`${styles.inputWrapper} ${isShaking ? styles.shake : ''}`}>
                        <Key className={styles.inputIcon} size={20} />
                        <input
                            type="password"
                            value={key}
                            onChange={(e) => {
                                setKey(e.target.value);
                                setError(false);
                            }}
                            placeholder="Magic word..."
                            className={`${styles.input} ${error ? styles.inputError : ''}`}
                            autoFocus
                        />
                    </div>

                    {error && (
                        <p className={styles.errorMessage}>
                            That's not the magic word! Ask the elves! 🧝
                        </p>
                    )}

                    <button type="submit" className={styles.button}>
                        <Gift size={20} />
                        Unlock Gifts
                    </button>
                </form>
            </div>
        </div>
    );
}
