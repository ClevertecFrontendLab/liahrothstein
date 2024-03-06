import star from '../../../shared/assets/icons/star-icon.svg';
import emptyStar from '../../../shared/assets/icons/empty-star-icon.svg';

export function ratingStars(rating: number): string[] {
    let array: string[] = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            array.push(star);
        } else {
            array.push(emptyStar)
        }
    };

    return (array)
};

export function dateParse(createdAt: string): string {
    let date: Date = new Date(createdAt);

    return (`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`)
}