import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ROUTES from '~constants/routes';

import styles from './styles.module.scss';

export default function BookItem({ id, image, title, author }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.bookDetails.replace(':id', id));
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={image} alt={title} className={`m-bottom-2 ${styles.image}`} />
      <h3 className={`m-bottom-1 ${styles.title}`}>{title}</h3>
      <p className={styles.author}>{author}</p>
    </div>
  );
}

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
};
