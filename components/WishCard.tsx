"use client";

import React from 'react';
import { Wish } from '@/context/WishContext';
import styles from './WishCard.module.css';
import { User, Gift, Snowflake, Smile } from 'lucide-react';

const AvatarIcon = ({ avatar }: { avatar: string }) => {
    switch (avatar) {
        case 'santa': return <span className={styles.emoji}>🎅</span>;
        case 'elf': return <span className={styles.emoji}>🧝</span>;
        case 'reindeer': return <span className={styles.emoji}>🦌</span>;
        case 'snowman': return <span className={styles.emoji}>⛄</span>;
        default: return <User />;
    }
};

const WishCard = ({ wish }: { wish: Wish }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <AvatarIcon avatar={wish.avatar} />
                </div>
                <h3 className={styles.name}>{wish.name}</h3>
            </div>
            <div className={styles.body}>
                <p className={styles.wishText}>
                    <span className={styles.quote}>“</span>
                    {wish.gift}
                    <span className={styles.quote}>”</span>
                </p>
            </div>
            <div className={styles.footer}>
                <Gift size={16} className={styles.icon} />
                <span>Wished on {new Date(wish.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export default WishCard;
