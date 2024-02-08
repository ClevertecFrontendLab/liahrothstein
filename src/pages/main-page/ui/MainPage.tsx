import { Button } from "@components/index";
import { DownloadToPhone } from "@features/index";
import { Cards, Header, Sidebar } from "@widgets/index";

export default function MainPage() {

    return (
        <div className="mainPage">
            <Sidebar />
            <Header />
            <main>
                <Cards />
                <div className="reviewsAndDownload">
                    <Button image="" title={'Смотреть отзывы'} />
                    <DownloadToPhone />
                </div>
            </main>
        </div>
    )
}