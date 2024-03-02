import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationActionCreatorResult, MutationDefinition } from "@reduxjs/toolkit/query";

interface CreateCommentRequest {
    message: string,
    rating: number
}

interface CreateCommentResponse {

}

export async function publishComment(message: string,
    rating: number,
    createComment: (arg: CreateCommentRequest) => MutationActionCreatorResult<MutationDefinition<CreateCommentRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, CreateCommentResponse, "writeCommentAPI">>,
    setMessage: (message: string) => void,
    setRating: (rating: number) => void,
    setIsModalOpen: (isOpen: boolean) => void) {

    await createComment({ message: message, rating: rating });
    setMessage('');
    setRating(0);
    setIsModalOpen(false);
}