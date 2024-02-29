import { CommentType } from "../../../shared/types";

export function sortComments(comments: CommentType[], setComments: (comments: CommentType[]) => void, isAllView: boolean): void {
    var now: number = Date.now();

    function compare(a: CommentType, b: number) {
        var createdAt = new Date(a.createdAt).getMilliseconds();

        if (createdAt > b) {
            return (1)
        } else if (createdAt == b) {
            return (0)
        } else {
            return (-1)
        }
    }

    var sortedComments: CommentType[] = comments.sort((a) => (compare(a, now)));
    var lastFourComments: CommentType[] = sortedComments.slice(0, 4);

    if (isAllView) {
        setComments(sortedComments)
    } else {
        setComments(lastFourComments)
    }
}