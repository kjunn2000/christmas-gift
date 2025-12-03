"use client";

import React from 'react';
import { useWishes } from '@/context/WishContext';
import LockScreen from './LockScreen';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { isUnlocked } = useWishes();

    if (!isUnlocked) {
        return <LockScreen />;
    }

    return <>{children}</>;
}
