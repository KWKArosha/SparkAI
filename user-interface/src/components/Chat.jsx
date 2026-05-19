import {useState} from 'react';
function Chat() {
    const [messages, setMessages] = useState([]);
    return(
        <div>
            <h2>Chat</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const message = e.target.elements.message.value;
                setMessages([...messages, message]);
                e.target.reset();
            }}>
                <input type="text" name="message" placeholder="Type your message here..." required />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default Chat;