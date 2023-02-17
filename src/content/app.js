// const testEl = document.createElement('div')
// testEl.classList.add('test')
// testEl.textContent = 'TEST'
// document.body.appendChild(testEl)

const url = ''

function sendRequst(text) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            user: user_id, 
            text: text,
            page: document.getElementsByClassName('app-article_title_1wM7c')[0].textContent
        }
    }).then(res => {
        console.log('Result:', res)
    })
    .catch(err => {
        console.error('Request error:', err)
    })
}

function getID() {
    return fetch('https://grants.myrosmol.ru/api/profile/personal')
    .then(res => res.json())
    .then(res => res.ID)
}

const domContainer = document.createElement('div')
domContainer.classList.add('root')
const root = ReactDOM.createRoot(domContainer)
root.render()