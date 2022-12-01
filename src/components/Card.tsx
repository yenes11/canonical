import React, { useEffect, useState } from 'react';
import { Author } from '../types'


interface Props {
  image: string;
  title: string;
  author: Author[];
  date: Date;
  source: string;
}

const Card = ({ image, title, author, date, source }: Props) => {
  const [dateString, setDateString] = useState<string>('');

  useEffect(() => {
    const _date = new Date(date); 
    setDateString(_date.toUTCString().slice(5, 16).trim());
  }, [])

  return (
    <div className="p-card--highlighted col-4 u-equal-height" style={styles.card}>
      <header className='p-card__header' style={styles.cardHeader}>
        {/* Couldn't find appropriate data from the API for the header */}
        <h5>CLOUD AND SERVER</h5>
      </header>

      <div className='p-card__content' style={styles.cardContent}>
        <img className="p-card__image" src={image} alt=''/>
        <h4>
          <a href={source}>{title}</a>
        </h4>
        <p>
          <em>
            By <a href={author[0].link}>{author[0].name}</a> on {dateString}
          </em>
        </p>
      </div>

      <footer className='p-card__footer' style={styles.cardFooter}>
        <p>Article</p>
      </footer>
    </div>
  )
}

const styles = {
  card: {
    borderTop: '4px solid #a87ca0',
    display: 'grid',
    gridTemplateRows: 'max-content'
  },
  cardHeader: {
    borderBottom: '1px dotted gray',
    padding: '0 .5em .5em'
  },
  cardContent: {
    padding: '.5em'
  },
  cardFooter: {
    borderTop: '1px dotted gray',
    alignSelf: 'end',
    padding: '1em 0 0 .5em',
  }
}

export default Card