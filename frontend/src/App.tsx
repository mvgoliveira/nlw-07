import { LoginBox } from "./components/LoginBox.ts";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { useAuth } from "./hooks/useAuth";
import { Container, MessageContainer } from "./styles";

export function App() {
  const { user } = useAuth();
  return (
    !!user ? (
      <MessageContainer>
        <MessageList/>
        <SendMessageForm/>
      </MessageContainer>
    ) : (
      <Container>
        <MessageList/>
        <LoginBox/>
      </Container>
    )
  )
}