import cls from './Menu.module.scss'
import Link from "next/link";

interface MenuProps {
    className?: string;
    inViewPort: number;
}
export const Menu = ({inViewPort}: MenuProps) => {
    return (
        <div className={cls.Menu}>
            <div className={cls.flex}>
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
        </div>
    );
};