"use client"
import cls from './Header.module.scss'
import Link from "next/link";
import {useEffect, useState} from "react";

interface HeaderProps {
    className?: string;
}

type InViewPort = 'none' | 'advantages' | 'reviews';

export const Header = ({className}: HeaderProps) => {
    const [top, setTop] = useState(true);
    const [inViewPort, setInViewport] = useState(0);
    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 1 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);


    useEffect(() => {
        const isElementVisible = () => {
            const reviewsComponent = document.getElementById('reviews').getBoundingClientRect();
            const advantagesComponent = document.getElementById('advantages').getBoundingClientRect();
            if (advantagesComponent.top <= ((window.innerHeight || document.documentElement.clientHeight) - 200) &&
                advantagesComponent.bottom >= 200
            ) {
                setInViewport(1);
            } else if (
                reviewsComponent.top <= ((window.innerHeight || document.documentElement.clientHeight) - 200) &&
                reviewsComponent.bottom >= 200
            ) {
                setInViewport(2);
            } else {
                setInViewport(0);
            }
        };
        window.addEventListener('scroll', isElementVisible);
        return () => window.removeEventListener('scroll', isElementVisible);
    }, []);


    return (
        <div className={`${cls.Header} ${!top ? cls.dropShadow : ''}`}>
            <div className={cls.flex}>
                <Link className={cls.logoLink} href={'/'}>
                    LOGO
                </Link>
                <div className={cls.nav}>
                    <div className={inViewPort === 1 ? cls.isInViewPort : ''}>
                        <Link href={'#advantages'}>
                            Преимущества
                        </Link>
                    </div>
                    <div className={inViewPort === 2 ? cls.isInViewPort : ''}>
                        <Link href={'#reviews'}>
                            Как работаем
                        </Link>
                    </div>
                </div>
                <div className={cls.burger}>
                    burger
                </div>
            </div>
        </div>
    );
};