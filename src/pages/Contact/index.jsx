import { Container, Button } from 'react-bootstrap';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contato" className={styles.contactSection}>
      <Container>
        
 
        <h2 className={styles.titulo}>
          Vamos Construir o <span className={styles.destaque}>Futuro</span>?
        </h2>
        
        <p className={styles.texto}>
          Estou disponível para oportunidades de estágio ou posições júnior em 
          <strong> Ciência de Dados</strong> e <strong>Engenharia de IA</strong>.
          Se você busca alguém com rigor matemático e paixão por código, entre em contato.
        </p>

        {/* BOTÕES DE AÇÃO */}
        <div className={styles.botoesContainer}>
          
          <Button 
            href="https://www.linkedin.com/in/rodrigo-vitorino-santos" 
            target="_blank" 
            className={styles.btnContact}
          >
            LinkedIn
          </Button>

          <Button 
            href="mailto:rodrigovitorino@ufrrj.br" 
            className={styles.btnContact}
          >
            E-mail
          </Button>

          <Button 
            href="https://github.com/RodrigoVitorinoS" 
            target="_blank" 
            className={styles.btnContact}
          >
            GitHub
          </Button>

        </div>


        <div className={styles.footerLine}>
          <p>&copy; {new Date().getFullYear()} Rodrigo Vitorino. Desenvolvido com React & Bootstrap.</p>
        </div>

      </Container>
    </section>
  );
}