import cls from './AdvantagesComponent.module.scss'
import Image from "next/image";
import arrow from '../../assets/arrow.png'

interface AdvantagesComponentProps {
    className?: string;
}

export const AdvantagesComponent = ({}: AdvantagesComponentProps) => {
    return (
        <div id={'advantages'} className={cls.AdvantagesComponent}>
            <div className={cls.container}>
                <h1 className={cls.header}>
                    Баланс между выручкой и удовлетворённостью пользователей
                </h1>
                <div className={cls.advantages}>
                    <div className={cls.advantage}>
                        <Image className={cls.picture}
                               src={arrow as unknown as string}
                               width={32}
                               height={32}
                               alt={'Булит'}/>
                        <h2 className={cls.advHeader}>
                            Частотность под контролем
                        </h2>
                        <div className={cls.advText}>
                            Чтобы не ронять NPS <br/> и не увеличивать отток пользователей
                        </div>
                    </div>
                    <div className={cls.linker}>
                        <svg className={cls.desktopPicture} width="573" height="120" viewBox="0 0 573 120" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="227" width="120" height="120" rx="17.9739" fill="#FF5900"/>
                            <g clipPath="url(#clip0_0_1)">
                                <path
                                    d="M317.219 32.4042C317.866 33.7735 318.255 35.3201 318.255 37.0116V83.9883C318.255 85.6638 317.866 87.2103 317.219 88.5797C322.223 89.4174 327 85.4543 327 79.993V40.9908C327 35.4973 322.206 31.5664 317.219 32.4042Z"
                                    fill="white"/>
                                <path opacity="0.8"
                                      d="M317.219 32.4042C315.082 27.9256 309.964 25.3963 304.977 27.0073C306.709 29.005 307.794 31.647 307.794 34.6434V86.3404C307.794 89.3207 306.709 91.9789 304.993 93.9765C309.997 95.5875 315.098 93.0421 317.236 88.5797C317.883 87.2103 318.272 85.6477 318.272 83.9883V37.0116C318.272 35.3362 317.883 33.7896 317.236 32.4042H317.219Z"
                                      fill="white"/>
                                <path opacity="0.4"
                                      d="M269.866 81.4106C265.769 79.9446 263.016 75.9654 263.016 71.503V50.7372C263.016 46.3875 265.623 42.505 269.575 40.9423L304.36 27.2166C304.571 27.1361 304.765 27.0877 304.976 27.0233C302.012 23.5919 297.154 22.0453 292.506 23.8818L254.206 38.993C249.866 40.7007 247 44.9859 247 49.7706V72.6146C247 77.5281 250.028 81.8939 254.53 83.521L292.814 97.2628C297.381 98.9061 302.077 97.3434 304.96 94.0086C304.846 93.9764 304.749 93.9603 304.636 93.9119L269.834 81.4267L269.866 81.4106Z"
                                      fill="white"/>
                                <path opacity="0.6"
                                      d="M307.793 85.3406L287 77.8665C283.615 76.6421 281.332 73.3396 281.332 69.6504V52.4127C281.332 48.8041 283.486 45.5821 286.757 44.2772L307.793 35.9322V34.6595C307.793 31.6631 306.708 29.0371 304.975 27.0234C304.765 27.0878 304.571 27.1361 304.36 27.2167L269.558 40.9585C265.607 42.5212 263 46.4037 263 50.7534V71.5192C263 75.9816 265.753 79.9447 269.85 81.4268L304.652 93.912C304.765 93.9443 304.862 93.9765 304.975 94.0087C306.708 91.9949 307.777 89.3529 307.777 86.3726L307.793 85.4019V85.3406Z"
                                      fill="white"/>
                                <path
                                    d="M281.331 52.3967V69.6343C281.331 73.3396 283.598 76.6422 286.999 77.8504L307.792 85.3416V35.9323L286.756 44.2772C283.485 45.566 281.331 48.8041 281.331 52.4128V52.3967Z"
                                    fill="white"/>
                            </g>
                            <path
                                d="M0.218805 60C0.218805 63.1929 2.80713 65.7812 6 65.7812C9.19287 65.7812 11.7812 63.1929 11.7812 60C11.7812 56.8071 9.19287 54.2188 6 54.2188C2.80713 54.2188 0.218805 56.8071 0.218805 60ZM6 61.084H227V58.916H6V61.084Z"
                                fill="#FF5900"/>
                            <path
                                d="M561.219 60C561.219 63.1929 563.807 65.7812 567 65.7812C570.193 65.7812 572.781 63.1929 572.781 60C572.781 56.8072 570.193 54.2188 567 54.2188C563.807 54.2188 561.219 56.8072 561.219 60ZM343 61.084L567 61.084L567 58.916L343 58.916L343 61.084Z"
                                fill="#FF5900"/>
                            <defs>
                                <clipPath id="clip0_0_1">
                                    <rect width="80" height="74.8148" fill="white" transform="translate(247 23.0926)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg className={cls.mobilePicture} width="80" height="198" viewBox="0 0 80 198" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect y="59" width="80" height="80" rx="11.9826" fill="#FF5900"/>
                            <g clipPath="url(#clip0_0_1)">
                                <path
                                    d="M60.8123 80.2077C61.2441 81.1206 61.5032 82.1517 61.5032 83.2794V114.597C61.5032 115.714 61.2441 116.745 60.8123 117.658C64.1483 118.217 67.3332 115.575 67.3332 111.934V85.9321C67.3332 82.2698 64.1375 79.6493 60.8123 80.2077Z"
                                    fill="white"/>
                                <path opacity="0.8"
                                      d="M60.8131 80.2077C59.388 77.222 55.9764 75.5358 52.6511 76.6098C53.8063 77.9416 54.5297 79.703 54.5297 81.7006V116.165C54.5297 118.152 53.8063 119.924 52.6619 121.256C55.998 122.33 59.3988 120.633 60.8239 117.658C61.2557 116.745 61.5148 115.703 61.5148 114.597V83.2794C61.5148 82.1624 61.2557 81.1314 60.8239 80.2077H60.8131Z"
                                      fill="white"/>
                                <path opacity="0.4"
                                      d="M29.2443 112.879C26.5128 111.901 24.6775 109.249 24.6775 106.274V92.4297C24.6775 89.5299 26.4157 86.9416 29.0499 85.8998L52.2402 76.7493C52.3806 76.6956 52.5101 76.6634 52.6505 76.6204C50.6748 74.3328 47.4359 73.3018 44.3374 74.5261L18.8043 84.6002C15.9109 85.7387 14 88.5955 14 91.7853V107.015C14 110.29 16.0189 113.201 19.0202 114.286L44.5425 123.447C47.587 124.542 50.7179 123.5 52.6397 121.277C52.5641 121.256 52.4993 121.245 52.4238 121.213L29.2227 112.889L29.2443 112.879Z"
                                      fill="white"/>
                                <path opacity="0.6"
                                      d="M54.5288 115.499L40.6665 110.516C38.4101 109.7 36.8878 107.498 36.8878 105.039V93.5468C36.8878 91.141 38.3237 88.993 40.5046 88.1231L54.5288 82.5598V81.7113C54.5288 79.7137 53.8055 77.963 52.6503 76.6205C52.51 76.6635 52.3804 76.6957 52.24 76.7494L29.039 85.9106C26.4047 86.9524 24.6665 89.5408 24.6665 92.4405V106.284C24.6665 109.259 26.5019 111.901 29.2333 112.889L52.4344 121.213C52.51 121.234 52.5747 121.256 52.6503 121.277C53.8055 119.935 54.518 118.174 54.518 116.187L54.5288 115.54V115.499Z"
                                      fill="white"/>
                                <path
                                    d="M36.8872 93.536V105.028C36.8872 107.498 38.3987 109.7 40.6659 110.505L54.5282 115.499V82.5598L40.5039 88.1231C38.3231 88.9823 36.8872 91.141 36.8872 93.5468V93.536Z"
                                    fill="white"/>
                            </g>
                            <path
                                d="M40 0.666667C37.0545 0.666667 34.6667 3.05448 34.6667 6C34.6667 8.94552 37.0545 11.3333 40 11.3333C42.9455 11.3333 45.3333 8.94552 45.3333 6C45.3333 3.05448 42.9455 0.666666 40 0.666667ZM39 6L39 59L41 59L41 6L39 6Z"
                                fill="#FF5900"/>
                            <path
                                d="M40 186.667C37.0545 186.667 34.6667 189.054 34.6667 192C34.6667 194.946 37.0545 197.333 40 197.333C42.9455 197.333 45.3333 194.946 45.3333 192C45.3333 189.054 42.9455 186.667 40 186.667ZM39 139L39 192L41 192L41 139L39 139Z"
                                fill="#FF5900"/>
                            <defs>
                                <clipPath id="clip0_0_1">
                                    <rect width="53.3333" height="49.8765" fill="white"
                                          transform="translate(14 74)"/>
                                </clipPath>
                            </defs>

                        </svg>
                    </div>
                    <div className={cls.advantage}>
                        <Image className={cls.picture}
                               src={arrow as unknown as string}
                               width={32}
                               height={32}
                               alt={'Булит'}/>
                        <h2 className={cls.advHeader}>
                            Максимальная выручка
                        </h2>
                        <div className={cls.advText}>
                            За счёт заполенения всех рекламных мест по высокой цене
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};