import React from 'react'

import styles from '../styles/BotTopPanel.module.css'

function BotTopPanel(props) {
    return (
        <div className={styles['top-panel']}>
            <div className={styles['btn-close']} onClick={props.onClose}>
                <span> &times; </span>
            </div>
        </div>
    )
}

export default BotTopPanel
