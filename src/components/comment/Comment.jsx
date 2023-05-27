import React from 'react'
import styles from "./comment.module.css";

const Comment = ({comment}) => {
  return (
    <div className={styles.container}>
      <div className={styles.pp}>
        <img src={comment?.img} alt="profile pic" />
      </div>
      <div className={styles.text}>
        <p>
          {comment?.text}
        </p>
      </div>
      <div className={styles.svg}>
        <img src="/img/quote2.svg" alt="" />
      </div>
      <div className={styles.username}>
        {comment?.name}
      </div>
    </div>
  )
}

export default Comment
