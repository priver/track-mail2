import Header from './Header';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const App = (messages) => `
    <div class="app">
        ${Header('Messenger')}
        ${MessageList(messages)}
        ${MessageForm()}
    </div>
`;

export default App;
