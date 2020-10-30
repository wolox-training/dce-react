import React from 'react';

import useAPI from '~hooks/useAPI';
import { ENDPOINTS } from '~constants/api';
import Loader from '~components/Loader';

import BookItem from '../components/BookItem';

import styles from './styles.module.scss';

export default function BookList() {
  const [{ isLoading, response }] = useAPI(
    {
      url: ENDPOINTS.bookList,
      method: 'GET'
    },
    null,
    true
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      {response?.data?.page?.map(book => (
        <BookItem key={book.id} id={book.id} author={book.author} title={book.title} image={book.imageUrl} />
      ))}
    </div>
  );
}
