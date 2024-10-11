import cls from './PartnersComponent.module.scss'
import Image from "next/image";
import clickWave from '../../assets/clickwave.png';
import zyphronix from '../../assets/zyphronix.png';
import novaSphere from '../../assets/novasphere.png';
interface PartnersComponentProps {
    className?: string;
}

export const PartnersComponent = ({}: PartnersComponentProps) => {
    return (
        <div className={cls.PartnersComponent}>
            <div className={cls.flex}>
                <h2 className={cls.header}>
                    Наши партнёры по монетизации
                </h2>
                <Image className={cls.clickWave}
                    height={55}
                    width={177}
                    src={clickWave as unknown as string}
                    alt={'clickWave'}
                />
                <Image className={cls.zyphronix}
                    height={71}
                    width={102}
                    src={zyphronix as unknown as string}
                    alt={'zyphronix'}
                />
                <Image className={cls.novaSphere}
                    height={45}
                    width={175}
                    src={novaSphere as unknown as string}
                    alt={'novaSphere'}
                />
            </div>
        </div>
    );
};