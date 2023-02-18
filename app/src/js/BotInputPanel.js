import React from 'react'
import { useState } from 'react'

import styles from '../styles/BotInputPanel.module.css'

function BotInputPanel(props) {
    const [text, updateText] = useState('')

    const onSend = (e) => {
        if (e) e.preventDefault()
        if (text == '') return
        props.onSend(text)
        updateText('')
    }

    const inputKeyDown = (e) => {
        if (e.keyCode == 13) onSend()
    }

    return (
        <div className={styles['modal__forms']}>
            <form action='#' className={styles['form']}>
                <button className={styles['btn__micro']} title='Задать вопрос голосом'>
                    <svg
                        style={{ width: '30px', height: '34px' }}
                        className={styles['modal__forms-micro']}
                        width='18'
                        height='29'
                    >
                        <use href='#micro'></use>
                    </svg>
                </button>
                <input
                    className={styles['modal__forms-text']}
                    value={text}
                    type='text'
                    placeholder='Введите ваш вопрос...'
                    title='Введите сюда Ваш вопрос'
                    onChange={(e) => updateText(e.target.value)}
                    onKeyDown={inputKeyDown}
                />
                <input
                    className={styles['modal__forms-btn']}
                    type='button'
                    value='Отправить'
                    title='Отправить Ваш вопрос'
                    onClick={onSend}
                />
            </form>
        </div>
    )
}

export default BotInputPanel
