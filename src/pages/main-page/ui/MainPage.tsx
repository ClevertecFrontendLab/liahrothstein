import { DownloadToPhone, ViewReviews } from "@features/index";
import { Cards, Header, Sidebar } from "@widgets/index";

import './MainPage.scss';

export function MainPage() {

    return (
        <div className="mainPage">
            <Sidebar />
            <div className="headerAndMain">
                <Header />
                <main>
                    <Cards />
                    <div className="reviewsAndDownload">
                        <ViewReviews />
                        <DownloadToPhone />
                    </div>
                </main>
            </div>
        </div>
    )
}