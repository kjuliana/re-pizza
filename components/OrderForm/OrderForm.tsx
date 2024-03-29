import React, {useState} from 'react';
import styles from "./OrderForm.module.css";
import Button from "../UI/Button/Button";
import RadioGroup from "../UI/RadioGroup/RadioGroup";
import Input from "../UI/Input/Input";

const payVariants = [
    {
        id: 'cash',
        label: 'Наличными'
    },
    {
        id: 'card',
        label: 'Картой курьеру'
    },
    {
        id: 'online',
        label: 'Онлайн'
    },
]

interface OrderFormProps {
    onSubmit: (obj) => void
}

const OrderForm = ({onSubmit}: OrderFormProps) => {

    const [formState, setFormState] = useState({
        firstName: '',
        phoneNumber: '',
        address: '',
        payVariant: 'cash'
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formState);
    }

    return (
        <form className={styles.root} onSubmit={handleSubmit}>
            <div className={styles.inputBlock}>
                <Input
                    id='name'
                    placeholder='Юлиана'
                    name='Имя'
                    value={formState.firstName}
                    autoComplete='name'
                    onChange={(newValue) => setFormState({...formState, firstName: newValue})}
                />
                <Input
                    id='phone'
                    placeholder='+7(000)000-00-00'
                    name='Телефон'
                    value={formState.phoneNumber}
                    autoComplete='tel'
                    onChange={(newValue) => setFormState({...formState, phoneNumber: newValue})}
                />
            </div>
            <div className={styles.inputBlock}>
                <Input
                    id='address'
                    placeholder='Ленинградское шоссе, 17, 98'
                    name='Aдрес'
                    value={formState.address}
                    autoComplete='street-address'
                    onChange={(newValue) => setFormState({...formState, address: newValue})}
                />
            </div>
            <div className={styles.wrapper}>
                <RadioGroup
                    name='payment'
                    variants={payVariants}
                    groupLabel='Оплата'
                    value={formState.payVariant}
                    onChange={(newValue) => setFormState({...formState, payVariant: newValue})}
                />
                <div>
                    <h4>Доставим через час</h4>
                </div>
            </div>
            <Button type='submit'>Заказать</Button>
        </form>
    );
};

export default OrderForm;