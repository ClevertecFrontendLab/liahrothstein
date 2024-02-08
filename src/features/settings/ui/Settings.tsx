import { Button } from "@components/index";

import settings from '../../../shared/assets/images/settings-icon.svg'

export default function Settings() {

    return (
        <Button title={'Настройки'} image={settings} />
    )
}