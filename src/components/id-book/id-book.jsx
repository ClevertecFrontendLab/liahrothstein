import { useParams } from "react-router-dom";

export function IdBook() {
    const {id} = useParams();

    return +id;
};