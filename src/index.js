import App from './components/App';

const root = document.getElementById('root');

// загрузить список сообщений из localStorage
const messages = [];

const app = App(messages);

root.innerHTML = app;

const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = event.target.elements.message;

    console.log(input.value);
    // добавить сообщение к списку сообщений и сохранить в localStorage

    input.value = '';
});
