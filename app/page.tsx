"use client";

import React from 'react';
import Link from 'next/link';
import { useWishes } from '@/context/WishContext';
import WishCard from '@/components/WishCard';
import styles from './page.module.css';
import { PlusCircle } from 'lucide-react';

export default function Home() {
  const { wishes } = useWishes();

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.title}>Christmas Wishlist 🎄</h1>
        <p className={styles.subtitle}>Share your holiday wishes with the world!</p>
        <Link href="/create" className="btn btn-primary">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PlusCircle size={20} />
            Make a Wish
          </span>
        </Link>
      </header>

      {wishes.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🎁</div>
          <h2>No wishes yet!</h2>
          <p>Be the first to add a wish to the list.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {wishes.map((wish) => (
            <WishCard key={wish.id} wish={wish} />
          ))}
        </div>
      )}
    </div>
  );
}
