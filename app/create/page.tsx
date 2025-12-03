"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useWishes } from '@/context/WishContext';
import AvatarSelection from '@/components/AvatarSelection';
import styles from './page.module.css';
import { ArrowLeft, Send } from 'lucide-react';

export default function CreateWish() {
    const router = useRouter();
    const { addWish } = useWishes();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('santa');
    const [gift, setGift] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !gift.trim()) return;

        addWish({
            name,
            avatar,
            gift,
        });

        router.push('/');
    };

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
                <ArrowLeft size={20} /> Back to List
            </Link>

            <div className={styles.card}>
                <h1 className={styles.title}>Make a Wish ✨</h1>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label className={styles.label}>Your Name</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. Timmy"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <AvatarSelection selectedAvatar={avatar} onSelect={setAvatar} />

                    <div className={styles.field}>
                        <label className={styles.label}>What do you wish for?</label>
                        <textarea
                            className={styles.textarea}
                            placeholder="Dear Santa, I would like..."
                            value={gift}
                            onChange={(e) => setGift(e.target.value)}
                            required
                            rows={4}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex', gap: '0.5rem' }}>
                        <Send size={20} />
                        Send to North Pole
                    </button>
                </form>
            </div>
        </div>
    );
}
