import React from 'react'

import styles from '../styles/BotOpenBtn.module.css'

function BotOpenBtn(props) {
    return (
        <div className={styles['bot-open-btn']} onClick={props.onClick}>
            <span>?</span>
        </div>
    )
}

export default BotOpenBtn
