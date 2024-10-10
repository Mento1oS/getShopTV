"use client"
import cls from './Header.module.scss'
import Link from "next/link";
import {useEffect, useState} from "react";

interface HeaderProps {
    className?: string;
}

export const Header = ({className}: HeaderProps) => {
    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 1 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);
    return (
        <div className={`${cls.Header} ${!top ? cls.dropShadow : ''}`}>
            <div className={cls.flex}>
                <Link className={cls.logoLink} href={'/'}>
                    LOGO
                </Link>
                <div className={cls.nav}>
                    <Link href={'#advantages'}>
                        Преимущества
                    </Link>
                    <Link href={'#reviews'}>
                        Как работаем
                    </Link>
                </div>
                <div className={cls.burger}>
                    burger
                </div>
            </div>
        </div>
    );
};