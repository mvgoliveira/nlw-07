import { Container } from "./styles";
import { VscGithubInverted } from "react-icons/vsc";
import { useAuth } from "../../hooks/useAuth";

export function LoginBox() {
  const {signInUrl, user} = useAuth();
  
  return (
    <Container>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className="signInWithGithub">
        <VscGithubInverted size={24}/>
        Entrar com o Github
      </a>
    </Container>
  )
}