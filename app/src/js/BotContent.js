import React, { useEffect } from 'react'
import BotMessage from './BotMessage.js'

import styles from '../styles/BotContent.module.css'

function BotContent(props) {
    let content = null
    useEffect(() => {
        content.scrollTo(0, content.scrollHeight)
    }, [props.messages])

    return (
        <div className={styles['modal__windowChat']} ref={(el) => (content = el)}>
            {props.messages.map((message, index) => {
                return (
                    <BotMessage
                        key={index}
                        isMine={message.isMine}
                        userName={message.userName}
                        text={message.text}
                    ></BotMessage>
                )
            })}
        </div>
    )
}

export default BotContent
