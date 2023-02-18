import React, { useState } from 'react'
import BotContent from './BotContent.js'
import BotInputPanel from './BotInputPanel.js'

import styles from '../styles/BotForm.module.css'
import BotOpenBtn from './BotOpenBtn.js'
import BotTopPanel from './BotTopPanel.js'

// function sendRequst(text) {
// return fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: {
//         user: user_id,
//         text: text,
//         page: document.getElementsByClassName('app-article_title_1wM7c')[0].textContent
//     }
// }).then(res => {
//     console.log('Result:', res)
// })
// .catch(err => {
//     console.error('Request error:', err)
// })
// }

// function getID() {
//   return fetch('https://grants.myrosmol.ru/api/profile/personal')
//   .then(res => res.json())
//   .then(res => res.ID)
// }

function BotForm() {
    const [messages, updateMessages] = useState([])
    const [isOpened, setIsOpened] = useState(false)

    const btnOpenClick = () => setIsOpened(true)
    const btnCloseClick = () => setIsOpened(false)

    const addNewMessage = (message) => {
        updateMessages((messages) => {
            return [...messages, message]
        })
    }

    const onMessageSend = (text) => {
        addNewMessage({
            text,
            isMine: true,
            userName: 'Me',
        })

        const page = document.getElementsByClassName('app-article_title_1wM7c')?.[0]?.textContent || ''

        fetch('https://temuch.ru/mes/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: 'id',
                message: text,
                page,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('Res', res)
                addNewMessage({
                    text: res.answer,
                    isMine: false,
                    userName: 'bot',
                })
            })
            .catch((err) => {
                console.error('Request error:', err)
            })
    }

    return (
        <>
            <svg
                style={{ display: 'none' }}
                xmlns='http://www.w3.org/2000/svg'
                xlinkHref='data:image/png'
            >
                <symbol id='micro'>
                    <rect x='4' width='10' height='20' rx='5' fill='white' />
                    <path
                        d='M1 14C1 16.5 2.6 21.5 9 21.5C15.4 21.5 17 16.5 17 14'
                        stroke='white'
                        fill='none'
                        strokeWidth='2'
                    />
                    <rect x='7' y='21' width='4' height='8' rx='1' fill='white' />
                </symbol>
            </svg>

            {isOpened ? (
                <div className={styles['modal']}>
                    <BotTopPanel onClose={btnCloseClick}></BotTopPanel>
                    <BotContent messages={messages}></BotContent>
                    <BotInputPanel onSend={onMessageSend}></BotInputPanel>
                </div>
            ) : (
                <BotOpenBtn onClick={btnOpenClick}></BotOpenBtn>
            )}
        </>
    )
}

export default BotForm
