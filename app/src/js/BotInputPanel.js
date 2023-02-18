import React from 'react'
import { useState } from 'react'

import styles from '../styles/BotInputPanel.module.css'

function BotInputPanel(props) {
    const [text, updateText] = useState('')
    const [isRecording, setRecording] = useState(false)

    console.log('input component')

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognizer = new SpeechRecognition()
    recognizer.interimResults = true
    recognizer.lang = 'ru-Ru'

    recognizer.onresult = function (event) {
        console.log(event)
        const result = event.results[event.resultIndex]
        if (result.isFinal) {
            const res = result[0].transcript
            console.log(res)
            setRecording(false)
            recognizer.stop()
            props.onSend(res)
        }
    }

    const onSend = (e) => {
        if (e) e.preventDefault()
        if (text == '') return
        props.onSend(text)
        updateText('')
    }

    const inputKeyDown = (e) => {
        if (e.keyCode == 13) {
            onSend(e)
        }
    }

    const microClicked = (e) => {
        e.preventDefault()
        setRecording((recording) => {
            if (!recording) {
                recognizer.start()
            } else {
                // recognizer.stop()
            }
            return !recording
        })
    }

    return (
        <div className={styles['modal__forms']}>
            <form action='#' className={styles['form']}>
                <button
                    onClick={microClicked}
                    className={styles['btn__micro']}
                    title='Задать вопрос голосом'
                    style={isRecording ? { border: '2px solid red' } : {}}
                >
                    <svg className={styles['modal__forms-micro']} width='18' height='29'>
                        <use href='#micro'></use>
                    </svg>
                </button>
                <input
                    className={styles['modal__forms-text']}
                    value={isRecording ? 'Идёт запись...' : text}
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
