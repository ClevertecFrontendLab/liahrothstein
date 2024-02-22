import { forwardRef } from "react";

import './CodeInput.scss';

interface CodeInputProps {
    id: string,
    ref: React.RefObject<HTMLInputElement>,
    onChange: () => void
}

export default forwardRef<HTMLInputElement, CodeInputProps>(function CodeInput({ id, onChange }, ref) {

    return (
        <input
            type="string"
            id={id}
            defaultValue=""
            ref={ref}
            onChange={onChange} />
    )
})