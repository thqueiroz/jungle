import { forwardRef, ForwardRefRenderFunction, useEffect } from "react";
import { InputHTMLAttributes } from "react";
import { FieldError } from 'react-hook-form';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: FieldError;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, error, ...rest }, ref): JSX.Element => {
    return (
        <div className={styles.inputBlock}>
            <input type="text" id={name} name={name} ref={ref} {...rest} style={{ borderColor: !!error && '#ff4040'}} />
        </div>
    )
}

export const Input = forwardRef(InputBase);