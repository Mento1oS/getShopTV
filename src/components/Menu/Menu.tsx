"use client"
import cls from './Menu.module.scss'
import Link from "next/link";

interface MenuProps {
    className?: string;
    inViewPort: number;
    setIsBurgerOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}
export const Menu = ({inViewPort, setIsBurgerOpen}: MenuProps) => {
    const handleMenuClick = ()=>{
        if (Math.max(window.innerWidth) < 691) {
            setIsBurgerOpen(false);
        }
    }
    return (
        <div className={cls.Menu}>
            <div className={cls.flex}>
                <div className={inViewPort === 1 ? cls.isInViewPort : ''}>
                    <Link onClick={handleMenuClick} href={'#advantages'}>
                        Преимущества
                    </Link>
                </div>
                <div className={inViewPort === 2 ? cls.isInViewPort : ''}>
                    <Link onClick={handleMenuClick} href={'#reviews'}>
                        Как работаем
                    </Link>
                </div>
            </div>
        </div>
    );
};