import { Button } from "@components/index";

import settings from '../../../shared/assets/icons/settings-icon.svg';

import './Settings.scss';

export function Settings() {

    return (
        <div className="settings">
            <Button
                title={'Настройки'}
                image={settings} />
        </div>
    )
}