import React from 'react'

import styles from '../styles/BotMessage.module.css'

function BotMessage(props) {
    return (
        <div
            className={
                styles['message'] + ' ' + (props.isMine ? styles['message-user'] : styles['message-bot'])
            }
        >
            <p className={styles['user-name']}>{props.userName}</p>
            <p className={styles['m_text']}>{props.text}</p>
        </div>
    )
}

export default BotMessage
