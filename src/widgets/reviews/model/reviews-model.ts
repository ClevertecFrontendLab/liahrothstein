import { CommentType } from "../../../shared/types";

export function sortComments(comments: CommentType[], setComments: (comments: CommentType[]) => void, isAllView: boolean): void {
    function compare(a: CommentType, b: CommentType) {
        var dateA: number = Date.parse(a.createdAt);
        var dateB: number = Date.parse(b.createdAt);

        if (dateA > dateB) {
            return (-1)
        } else if (dateA === dateB) {
            return (0)
        } else {
            return (1)
        }
    };

    var sortedComments: CommentType[] = comments.sort(compare);
    var lastFourComments: CommentType[] = sortedComments.slice(0, 4);

    if (isAllView) {
        setComments(sortedComments)
    } else {
        setComments(lastFourComments)
    }
}