import { Button } from "@components/index";

import { imageConditionalRendering, titleConditionalRendering } from '../model/conditional-rendering';

import settings from '../../../shared/assets/images/settings-icon.svg';

import './Settings.scss';

export default function Settings() {

    return (
        <div className="settings">
            <Button
                title={titleConditionalRendering()}
                image={imageConditionalRendering(settings)} />
        </div>
    )
}