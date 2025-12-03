"use client";

import React from 'react';
import styles from './AvatarSelection.module.css';

const AVATARS = [
    { id: 'santa', emoji: '🎅', label: 'Santa' },
    { id: 'elf', emoji: '🧝', label: 'Elf' },
    { id: 'reindeer', emoji: '🦌', label: 'Reindeer' },
    { id: 'snowman', emoji: '⛄', label: 'Snowman' },
];

interface AvatarSelectionProps {
    selectedAvatar: string;
    onSelect: (avatar: string) => void;
}

const AvatarSelection = ({ selectedAvatar, onSelect }: AvatarSelectionProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>Choose your character:</label>
            <div className={styles.grid}>
                {AVATARS.map((avatar) => (
                    <button
                        key={avatar.id}
                        type="button"
                        className={`${styles.option} ${selectedAvatar === avatar.id ? styles.selected : ''}`}
                        onClick={() => onSelect(avatar.id)}
                    >
                        <span className={styles.emoji}>{avatar.emoji}</span>
                        <span className={styles.name}>{avatar.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AvatarSelection;
