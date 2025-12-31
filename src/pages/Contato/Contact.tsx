import { Button } from "@mui/material";
import { useInView } from "../../hooks/useInView";
import { Github, Linkedin, Send } from "lucide-react";
import "./style.css";
import { EmailOutlined } from "@mui/icons-material";
import { LinkConect } from "./linkconect/LinkConecte";
import { InputForm } from "./inputForm/InputForm";

export const Contact = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div className="body-contact">
      <div className="body-contact-title-box">
        <p className={`titleMain ${isVisible ? "animate" : ""}`} ref={ref}>
          Vamos Conversar
        </p>
        <p className={`body-contact-subtitle ${isVisible ? "animate" : ""}`}>
          Interessado? Entre em contato comigo para trabalharmos juntos!
        </p>
      </div>
      <div className="body-contact-box">
        <div
          className={`body-contact-left ${isVisible ? "animate" : ""}`}
          ref={ref}
        >
          <InputForm label="Seu nome" />
          <InputForm label="Seu email" />
          <InputForm label="Mensagem" multilinetrue />
          <Button
            sx={{
              width: "80%",
              height: "50px",
              borderRadius: "12px",
              backgroundColor: "#8428cfff",
              color: "white",
              display: "flex",
              gap: "10px",
            }}
          >
            Enviar Mensagem <Send style={{ width: "15px" }} />
          </Button>
        </div>
        <div className="body-contact-right">
          <div
            className={`body-contact-right-conecte ${
              isVisible ? "animate" : ""
            }`}
            ref={ref}
          >
            <p className="body-contact-right-title">Conecte-se</p>
            <div className="body-contact-right-options">
              <LinkConect
                title="Email"
                acount="gustavoalbdeveloper@gmail.com"
                icon={<EmailOutlined />}
                link="https://mail.google.com/mail/u/0/?fs=1&to=gustavoalbdeveloper@gmail.com&su=Contato+pelo+Portf%C3%B3lio&body=Ol%C3%A1+Gustavo,%0D%0A%0D%0AGostaria+de+entrar+em+contato.&tf=cm"
              />
              <LinkConect
                title="GitHub"
                acount="DevGustaa"
                icon={<Github />}
                link="https://github.com/DevGustaa"
              />
              <LinkConect
                title="LinkedIn"
                acount="Gustavo Albuquerque Lemos"
                icon={<Linkedin />}
                link="https://www.linkedin.com/in/gustavo-albuquerque-485166270/"
              />
            </div>
          </div>
          <div
            className={`body-contact-right-disp ${isVisible ? "animate" : ""}`}
            ref={ref}
          >
            <p className="body-contact-right-disp-title">Disponibilidade</p>
            <p className="body-contact-right-disp-subtitle">
              Disponível para projetos freelance e oportunidades full-time.
              Respondo geralmente em até 24 horas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
