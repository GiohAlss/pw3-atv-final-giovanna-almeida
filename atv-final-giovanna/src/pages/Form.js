import {useState, useEffect} from 'react';
import styles from './Form.module.css';

import Input from '../components/Input';
import Select from '../components/Select';

function Form() {

    const [sigla, setSigla] = useState([]);

    return(
        <section className={styles.form_container}>
            <form>

                <Input type='text' name='name_student' text='Nome' placeholder='Digite seu nome completo' />
                

            </form>
        </section>
    )
};

export default Form;