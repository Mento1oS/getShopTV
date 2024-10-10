import cls from './FormComponent.module.scss'
import {AppForm} from "@/components/AppForm/AppForm";

interface FormComponentProps {
    className?: string;
}
export const FormComponent = ({}: FormComponentProps) => {
    return (
        <div className={cls.FormComponent}>
            <div className={cls.container}>
                <AppForm/>
            </div>
        </div>
    );
};