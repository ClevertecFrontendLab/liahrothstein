import { Header, Reviews, Sidebar } from "@widgets/index";

import './FeedbacksPage.scss';

export function FeedbacksPage() {

    return (
        <div className="feedbacksPage">
            <Sidebar />
            <div className="headerAndMain">
                <Header />
                <main>
                    <Reviews />
                </main>
            </div>
        </div>
    )
}