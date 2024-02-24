import { Button } from "@components/index";
import { DownloadToPhone } from "@features/index";
import { Cards, Header, Sidebar } from "@widgets/index";

import './MainPage.scss';

export default function MainPage() {

    return (
        <div className="mainPage">
            <Sidebar />
            <div className="headerAndMain">
                <Header />
                <main>
                    <Cards />
                    <div className="reviewsAndDownload">
                        <Button title={'Смотреть отзывы'} />
                        <DownloadToPhone />
                    </div>
                </main>
            </div>
        </div>
    )
}