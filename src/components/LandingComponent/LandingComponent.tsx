import cls from './LandingComponent.module.scss'
import {SwitchBlock} from "@/components/SwitchBlock/SwitchBlock";

interface LandingComponentProps {
    className?: string;
}

export const LandingComponent = ({}: LandingComponentProps) => {
    return (
        <div className={cls.LandingComponent}>
            <div className={cls.container}>
                <h0 className={cls.header}>Монетизируйте клиентскую базу, не снижая NPS
                </h0>
                <h2 className={cls.subhead}>
                    Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной
                    монетизации
                </h2>
                <button className={cls.button}>
                    Заказать звонок
                </button>
                <div className={cls.additional}>
                    <h1 className={cls.additionalHeader}>
                        Дополнительные источники выручки для разных компаний
                    </h1>
                    <div className={cls.switch}>
                        <SwitchBlock/>
                    </div>
                </div>
            </div>
        </div>
    );
};