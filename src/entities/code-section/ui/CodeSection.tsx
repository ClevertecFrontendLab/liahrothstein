import React from 'react';

import { CodeInput } from '@components/index';

import { onChangeHandler, updateValues } from '../model/code-section-model';

import './CodeSection.scss';

interface CodeSectionProps {
    length: number,
    values: string[],
    setValues: (value: string[]) => void,
}

export default function CodeSection({ length, values, setValues }: CodeSectionProps) {
    const inputRefs: React.RefObject<HTMLInputElement>[] = [];

    for (let i = 0; i < length; i++) {
        inputRefs.push(React.createRef<HTMLInputElement>());
    }

    const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        switch (e.code) {
            case 'Backspace': {
                e.preventDefault();
                if (document.activeElement === inputRefs[0].current) {
                    inputRefs[0].current!.value = '';
                    updateValues(inputRefs, setValues);
                }
                for (let i = 1; i < length; i += 1) {
                    const inputRef = inputRefs[i];
                    if (!inputRef || !inputRef.current) {
                        return;
                    }
                    if (document.activeElement === inputRef.current) {
                        inputRef.current.value = '';
                        inputRefs[i - 1]?.current?.focus();
                        updateValues(inputRefs, setValues);

                        return;
                    }
                }
                break;
            }
            case 'ArrowLeft': {
                for (let i = 1; i < length; i += 1) {
                    const inputRef = inputRefs[i];
                    if (!inputRef || !inputRef.current) {
                        return;
                    }
                    if (document.activeElement === inputRef.current) {
                        inputRefs[i - 1]?.current?.focus();
                        return;
                    }
                }
                break;
            }
            case 'ArrowRight':
            case 'Space': {
                for (let i = 0; i < length - 1; i += 1) {
                    const inputRef = inputRefs[i];
                    if (!inputRef || !inputRef.current) {
                        return;
                    }
                    if (document.activeElement === inputRef.current) {
                        inputRefs[i + 1]?.current?.focus();
                        return;
                    }
                }
                break;
            }
        }
    };

    return (
        <div className='codeSection' onKeyDown={keyDownHandler}>
            {values.map((_, index) => (
                <CodeInput
                    key={index}
                    id={`code-${index}`}
                    ref={inputRefs[index]}
                    onChange={onChangeHandler(index, inputRefs, setValues)}
                />
            ))}
        </div>
    );
};
