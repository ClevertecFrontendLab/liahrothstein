import { Button } from "@components/index";

import androidIcon from '../../../shared/assets/images/android-icon.svg';
import appleIcon from '../../../shared/assets/images/apple-icon.svg';

export default function DownloadToPhone() {

    return (
        <article className="downloadToPhoneCard">
            <h2 className="title">Скачать на телефон</h2>
            <h2 className="description">Доступно в PRO-тарифе</h2>
            <hr />
            <div className="downloadButtons">
                <Button image={androidIcon} title={'Android OS'} />
                <Button image={appleIcon} title={'Apple iOS'} />
            </div>
        </article>
    )
}