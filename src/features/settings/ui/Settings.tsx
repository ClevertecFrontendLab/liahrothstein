import { Button } from "@components/index";

import settings from '../../../shared/assets/images/settings-icon.svg';

import './Settings.scss';

export default function Settings() {

    return (
        <div className="settings">
            <Button title={'Настройки'} image={settings} />
        </div>
    )
}