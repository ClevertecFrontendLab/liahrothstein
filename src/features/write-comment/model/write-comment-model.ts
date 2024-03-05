import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationActionCreatorResult, MutationDefinition } from "@reduxjs/toolkit/query";

interface CreateCommentRequest {
    message: string,
    rating: number
}

export async function publishComment(message: string,
    rating: number,
    createComment: (arg: CreateCommentRequest) => MutationActionCreatorResult<MutationDefinition<CreateCommentRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, {}, "writeCommentAPI">>,
    setIsModalOpen: (isOpen: boolean) => void) {

    await createComment({ message: message, rating: rating });

    setIsModalOpen(false);
}

export function retryWrite(setIsErrorModalOpen: (isOpen: boolean) => void, setIsWriteModalOpen: (isOpen: boolean) => void) {
    setIsErrorModalOpen(false);
    setIsWriteModalOpen(true);
}