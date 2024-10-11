"use client"
import cls from './AppForm.module.scss'
import Link from "next/link";
import {MouseEventHandler, useState} from "react";
import {Checkbox} from "@mui/material";

interface AppFormProps {
    className?: string;
}

export const AppForm = ({className}: AppFormProps) => {
    const [isError, setIsError] = useState(false);
    const [isAgree, setIsAgree] = useState(false);
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (!email
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }
    return (
        <form className={cls.AppForm}>
            <h1 className={cls.header}>
                Заполните форму
            </h1>
            <div className={cls.flex}>
                <textarea value={question} onChange={(e) => {
                    setQuestion(e.target.value);
                }} placeholder={'Напишите свой вопрос'} className={cls.textarea} name="" id=""></textarea>
                <div className={cls.rightCol}>
                    <input onChange={e => {
                        setEmail(e.target.value);
                    }} value={email} placeholder={'Введите e-mail'}
                           className={`${cls.input} ${isError ? cls.error : ''}`}
                           type="text"/>
                    {
                        isError && <div className={cls.errorText}>
                            Неправильно указана почта
                        </div>
                    }
                    <div className={cls.checkboxFlex}>
                        <Checkbox size='small' sx={{
                            bgColor: 'none',
                            color: 'rgb(164, 173, 172)',
                            borderRadius: '4px',
                            width: '14px',
                            height: '14px',
                            '&.Mui-checked': {
                                color: 'rgb(255, 89, 0)',
                                bgColor: 'rgb(255, 255, 255)',
                            }
                        }} onChange={(e) => {
                            setIsAgree(e.target.checked);
                        }} checked={isAgree} className={cls.checkbox}/>
                        <div className={cls.checkboxText}>
                            Я ознакомлен(а) с{' '}
                            <Link
                                className={cls.underline}
                                href={'/'}
                            >
                                политикой конфиденциальности
                            </Link> и согласен(на) на обработку{' '}
                            <Link
                                className={cls.underline}
                                href={'/'}
                            >
                                персональных данных.
                            </Link>
                        </div>
                    </div>
                    <button disabled={!(isAgree && email.length)} onClick={handleSubmit}
                            className={cls.button}>Отправить
                    </button>
                </div>
            </div>
        </form>
    );
};