import { Header, Sidebar } from "@widgets/index";
import { useLocation } from "react-router-dom";

export function FeedbacksPage() {
    const { state } = useLocation();
    console.log(state)

    return (
        <div className="feedbacksPage">
            <Sidebar />
            <div className="headerAndMain">
                <Header />
                <main>

                </main>
            </div>
        </div>
    )
}