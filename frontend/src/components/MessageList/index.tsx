import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import io from "socket.io-client";

type TMessage = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}
const messagesQueue: TMessage[] = [];

const socket = io('http://localhost:3333');

socket.on('new_message', (newMessage: TMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<TMessage[]>([])

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {        
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean));

        messagesQueue.shift();
      }
    }, 3000);
  }, [])

  useEffect(() => {
    api.get<TMessage[]>("messages/last3").then(response => {
      setMessages(response.data);
    });
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className="messageList">
        {messages.map(message => {
          console.log(message);
          
          return (
            <li className="message" key={message.id}>         
              <p>
                {message.text}
              </p>

              <section className="messageUser">
                <article className="userImage">
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </article>
                <span>{message.user.name}</span>
              </section>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}