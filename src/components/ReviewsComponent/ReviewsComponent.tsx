import cls from './ReviewsComponent.module.scss'
import arrow from '../../assets/arrow.png';
import Image from "next/image";

interface ReviewsComponentProps {
    className?: string;
}

export const ReviewsComponent = ({}: ReviewsComponentProps) => {
    return (
        <div id={'reviews'} className={cls.ReviewsComponent}>
            <div className={cls.container}>
                <div className={cls.wrapper}>
                    <h1 className={cls.header}>
                        Подробные отчёты для вас и правообладателей
                    </h1>
                    <div className={cls.blocks}>
                        <div className={cls.block}>
                            <Image
                                className={cls.picture}
                                src={arrow as unknown as string}
                                width={32}
                                height={32}
                                alt={'Булит'}
                            />
                            <div className={cls.text}>
                                Выручка, CTR, показы и другие показатели в реальном времени.
                            </div>
                        </div>
                        <div className={cls.block}>
                            <Image
                                className={cls.picture}
                                src={arrow as unknown as string}
                                width={32}
                                height={32}
                                alt={'Булит'}
                            />
                            <div className={cls.text}>
                                Инструменты контроля качества трафика.
                            </div>
                        </div>
                        <div className={cls.block}>
                            <Image
                                className={cls.picture}
                                src={arrow as unknown as string}
                                width={32}
                                height={32}
                                alt={'Булит'}
                            />
                            <div className={cls.text}>
                                Ежемесячные автоматические отчёты для каждого правообладателя.
                            </div>
                        </div>
                    </div>
                    <button className={cls.button}>Заказать звонок</button>
                </div>
            </div>
        </div>
    );
};