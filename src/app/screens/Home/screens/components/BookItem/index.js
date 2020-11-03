import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export default function BookItem({ image, title, author }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={`m-bottom-2 ${styles.image}`} />
      <h3 className={`m-bottom-1 ${styles.title}`}>{title}</h3>
      <p className={styles.author}>{author}</p>
    </div>
  );
}

BookItem.propTypes = {
  author: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
};
