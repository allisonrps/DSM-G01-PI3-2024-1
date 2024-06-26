import React from 'react';
import styles from './PostCard.module.css';

const PostCard = ({ post, user }) => {
  return (
    <div className={styles.card}>
      {post.midia && <img src={`uploads/${post.midia}`} alt="Midia do post" className={styles.media} />}
      <div className={styles.content}>
        <h2>Nome: {user ? user.nome : 'Carregando...'}</h2>
        <h3>{post.descricao}</h3>
        <p>{new Date(post.data).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PostCard;
