"use client"
import cls from './SwitchBlock.module.scss';
import {useState} from "react";

interface SwitchBlockProps {
    className?: string;
}

export const SwitchBlock = ({className}: SwitchBlockProps) => {
    const [isLeft, setIsLeft] = useState(true);
    return (
        <div className={cls.SwitchBlock}>
            <div className={cls.radio}>
                <div onClick={() => {
                    setIsLeft(true)
                }} className={`${cls.option} ${isLeft ? cls.active : ''}`}>
                    Операторам
                </div>
                <div onClick={() => {
                    setIsLeft(false)
                }} className={`${cls.option} ${!isLeft ? cls.active : ''}`}>
                    ОТТ сервисам
                </div>
            </div>
            <div className={cls.text}>
                {isLeft ?
                    'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации' :
                    'Дополнительные возможности обогащения данных об аудитории и монетизации'}
            </div>
        </div>
    );
};