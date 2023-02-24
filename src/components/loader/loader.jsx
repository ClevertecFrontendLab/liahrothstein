import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { useGetBooksQuery, useGetCategoriesQuery, useGetIdBookQuery } from '../../redux';

import loader from './loader.png';

import './loader.css';

export function Loader() {
    const { id } = useParams();
    const { isError: isBooksError } = useGetBooksQuery();
    const { isError: isIdBookError } = useGetIdBookQuery(id);
    const { isLoading: isBooksLoading } = useGetBooksQuery();
    const { isLoading: isCategoriesLoading } = useGetCategoriesQuery();
    const { isLoading: isIdBookLoading } = useGetIdBookQuery(id);

    return (
        <div className={classNames('blurBackground', { loading: isBooksLoading || isIdBookLoading || isCategoriesLoading }, { error: isBooksError || isIdBookError })} data-test-id='loader'>
            <div className="loader"><img src={loader} alt="" /></div>
        </div>
    );
}