"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Wish {
    id: string;
    name: string;
    avatar: string; // 'santa', 'elf', 'reindeer', 'snowman'
    gift: string;
    createdAt: number;
}

interface WishContextType {
    wishes: Wish[];
    addWish: (wish: Omit<Wish, 'id' | 'createdAt'>) => void;
    isUnlocked: boolean;
    unlockApp: (key: string) => boolean;
}

const WishContext = createContext<WishContextType | undefined>(undefined);

export const WishProvider = ({ children }: { children: React.ReactNode }) => {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [isUnlocked, setIsUnlocked] = useState(false);

    useEffect(() => {
        const storedWishes = localStorage.getItem('christmas-wishes');
        if (storedWishes) {
            setWishes(JSON.parse(storedWishes));
        }

        const unlockedSession = sessionStorage.getItem('christmas-unlocked');
        if (unlockedSession === 'true') {
            setIsUnlocked(true);
        }
    }, []);

    const addWish = (newWish: Omit<Wish, 'id' | 'createdAt'>) => {
        const wish: Wish = {
            ...newWish,
            id: crypto.randomUUID(),
            createdAt: Date.now(),
        };
        const updatedWishes = [wish, ...wishes];
        setWishes(updatedWishes);
        localStorage.setItem('christmas-wishes', JSON.stringify(updatedWishes));
    };

    const unlockApp = (key: string) => {
        if (key === 'moneymoneyhome') {
            setIsUnlocked(true);
            sessionStorage.setItem('christmas-unlocked', 'true');
            return true;
        }
        return false;
    };

    return (
        <WishContext.Provider value={{ wishes, addWish, isUnlocked, unlockApp }}>
            {children}
        </WishContext.Provider>
    );
};

export const useWishes = () => {
    const context = useContext(WishContext);
    if (context === undefined) {
        throw new Error('useWishes must be used within a WishProvider');
    }
    return context;
};
