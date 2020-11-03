import React, { useEffect } from 'react';
import i18next from 'i18next';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import useAPI from '~hooks/useAPI';
import { ENDPOINTS } from '~constants/api';
import Loader from '~components/Loader';
import BackButton from '~components/BackButton';

import Description from './components/Description';
import styles from './styles.module.scss';

export default function BookDetails({ history }) {
  const { id } = useParams();
  const [{ isLoading, isError, response }] = useAPI(
    {
      url: ENDPOINTS.bookDetails.replace(':id', id),
      method: 'GET'
    },
    { data: {} },
    true
  );

  const { author, editor, genre, imageUrl, title, year } = response.data;

  useEffect(() => {
    if (isError) {
      history.replace('/not-found');
    }
  }, [history, isError]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`row middle center ${styles.container}`}>
      <BackButton />
      <div className={`full-width ${styles.card}`}>
        <div className={styles.cardImage}>
          <img src={imageUrl} alt="book-cover" className={`full-width ${styles.image}`} />
        </div>
        <div className={`column ${styles.cardContent}`}>
          <div className={`m-bottom-10 ${styles.titleBox}`}>
            <p className={`m-right-1 ${styles.title}`}> {title} </p>
            <span className={styles.subtitle}> ({genre}) </span>
          </div>
          <Description title={i18next.t('BookDetails:author')} text={author} />
          <Description title={i18next.t('BookDetails:editor')} text={editor} />
          <Description title={i18next.t('BookDetails:year')} text={year} />
        </div>
      </div>
    </div>
  );
}

BookDetails.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func
  })
};
