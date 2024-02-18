import { Button } from "@components/index";

import androidIcon from '../../../shared/assets/icons/android-icon.svg';
import appleIcon from '../../../shared/assets/icons/apple-icon.svg';

import './DownloadToPhone.scss';

export default function DownloadToPhone() {

    return (
        <article className="downloadToPhoneCard">
            <h2 className="title">Скачать на телефон</h2>
            <h2 className="description">Доступно в PRO-тарифе</h2>
            <hr />
            <div className="downloadButtons">
                <Button
                    image={androidIcon}
                    title={'Android OS'}
                    disabled={false}
                    onClickHandler={undefined} />
                <Button
                    image={appleIcon}
                    title={'Apple iOS'}
                    disabled={false}
                    onClickHandler={undefined} />
            </div>
        </article>
    )
}