import cls from "./page.module.scss";
import {Header} from "@/components/Header/Header";
import {LandingComponent} from "@/components/LandingComponent/LandingComponent";
import {AdvantagesComponent} from "@/components/AdvantagesComponent/AdvantagesComponent";
import {PartnersComponent} from "@/components/PartnersComponent/PartnersComponent";
import {ReviewsComponent} from "@/components/ReviewsComponent/ReviewsComponent";
import {FormComponent} from "@/components/FormComponent/FormComponent";

export default function Home() {
    return (
        <div className={cls.container}>
            <Header/>
            <LandingComponent/>
            <AdvantagesComponent/>
            <PartnersComponent/>
            <ReviewsComponent/>
            <FormComponent/>
        </div>
    );
}
