export interface CommentProps {
    avatar: string | null,
    fullName: string | null,
    createdAt: string,
    rating: number,
    message: string | null
}

export interface CommentType {
    createdAt: string,
    fullName: string | null,
    id: string,
    imageSrc: string | null,
    message: string | null,
    rating: number
}