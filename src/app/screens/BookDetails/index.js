import React from 'react';
import i18next from 'i18next';
import { useParams, useHistory } from 'react-router-dom';

import backArrow from '~assets/images/back-arrow.png';
import useAPI from '~hooks/useAPI';
import { ENDPOINTS } from '~constants/api';
import Loader from '~components/Loader';

import Description from './components/Description';
import styles from './styles.module.scss';

export default function BookDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [{ isLoading, response }] = useAPI(
    {
      url: ENDPOINTS.bookDetails.replace(':id', id),
      method: 'GET'
    },
    { data: {} },
    true
  );

  const { author, editor, genre, imageUrl, title, year } = response.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`row middle center ${styles.container}`}>
      <div className={`row middle ${styles.goBack}`} onClick={() => history.goBack()}>
        <img src={backArrow} alt="back-arrow" className="m-right-2" />
        <p className={styles.goBackText}>{i18next.t('Common:buttonBack')}</p>
      </div>
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
