import { FormEvent, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Container } from "./styles";


export function SendMessageForm() {
  const {user, signOut} = useAuth();
  const [message, setMessage] = useState("");

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    await api.post('messages', { message });

    setMessage("");
  }

  return (
    <Container>
      <button className="SignOutButton" onClick={signOut}>
        <VscSignOut size={24}/>
      </button>

      <header className="userInformation">
        <div className="userImageContainer">
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong>{user?.name}</strong>
        <span> <VscGithubInverted size={16}/> {user?.login} </span>
      </header>

      <form onSubmit={handleSendMessage}>
        <label htmlFor="message"> Mensagem </label>
        
        <textarea 
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={event => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit"> Enviar mensagem </button>
      </form>
    </Container>
  )
}