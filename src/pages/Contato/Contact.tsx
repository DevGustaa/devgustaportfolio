import { Alert, Button, Snackbar } from "@mui/material";
import { useInView } from "../../hooks/useInView";
import { Github, Linkedin, Send } from "lucide-react";
import "./style.css";
import { EmailOutlined } from "@mui/icons-material";
import { LinkConect } from "./linkconect/LinkConecte";
import { InputForm } from "./inputForm/InputForm";
import { TurnstileCaptcha } from "../../hooks/capchat";
import { useState } from "react";

export const Contact = () => {
  const [captchaOk, setCaptchaOk] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaOk) return;

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gustavoalbdeveloper@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) throw new Error();

      setOpen(true);
      e.currentTarget.reset();
      setCaptchaOk(false);
    } finally {
      setLoading(false);
    }
  };

  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div className="body-contact" id="body-contact">
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setOpen(false)}>
          Mensagem enviada com sucesso!
        </Alert>
      </Snackbar>

      <div className="body-contact-title-box">
        <p className={`titleMain ${isVisible ? "animate" : ""}`} ref={ref}>
          Vamos Conversar
        </p>
        <p className={`body-contact-subtitle ${isVisible ? "animate" : ""}`}>
          Interessado? Entre em contato comigo para trabalharmos juntos!
        </p>
      </div>
      <div className="body-contact-box">
        <form
          className={`body-contact-left ${isVisible ? "animate" : ""}`}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:5173/" />
          <InputForm label="Seu nome" id="name" name="name" type="text" />
          <InputForm label="Seu email" id="email" name="email" type="email" />
          <InputForm
            label="Mensagem"
            id="message"
            name="message"
            type="text"
            multilinetrue
          />
          <TurnstileCaptcha onVerify={() => setCaptchaOk(true)} />
          <Button
            type="submit"
            disabled={!captchaOk || loading}
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
            {loading ? (
              <p style={{ fontSize: "16px" }}>Enviando..."</p>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                Enviar Mensagem <Send style={{ width: "15px" }} />
              </p>
            )}
          </Button>
        </form>

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
