import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Projects.module.css';

export default function Projects() {
  

  const projetos = [
    {
      titulo: "Otimização de Quadro de Horários",
      descricao: "Este projeto é uma solução computacional que combina análise estatística e otimização matemática para ajudar gestores escolares a melhorar a frequência dos alunos. Ele utiliza Python para automatizar cálculos e modelos de otimização, e oferece uma interface web simples em HTML, CSS e JavaScript para uso por qualquer pessoa, mesmo sem conhecimento técnico.",
      techs: ["Python", "Otimização Matemática", "HTML", "JavaScript"],
      link: "https://github.com/RodrigoVitorinoS/otimizacao_quadro_horarios_escolares" // Coloque o link específico depois
    },
    {
      titulo: "Chatbot Inteligente",
      descricao: "Criação de um assistente virtual capaz de entender linguagem natural e automatizar o atendimento. O projeto utiliza técnicas de NLP para classificar intenções e responder usuários de forma contextualizada.",
      techs: ["Python", "NLP", "TensorFlow/PyTorch", "Automação"],
      link: "https://github.com/RodrigoVitorinoS"
    },
    {
      titulo: "Credit Scoring (Alura Cash)",
      descricao: "Pipeline completo de Ciência de Dados para previsão de risco de crédito. Desde a limpeza de dados brutos SQL até o treinamento de modelos preditivos e deploy, gerando valor direto para o negócio.",
      techs: ["Machine Learning", "Scikit-Learn", "SQL", "Power BI", "Analise de Dados"],
      link: "https://github.com/RodrigoVitorinoS/Alura_Cash"
    }
  ];

  return (
    <section id="projetos" className={styles.projectsSection}>
      <Container>
        
        <h2 className={styles.titulo}>
          Trabalhos <span className={styles.destaque}>& Projetos</span>
        </h2>

        <Row>
          {projetos.map((projeto, index) => (
            <Col lg={6} md={6} className="mb-4" key={index}>
              <Card className={styles.projectCard}>
                <Card.Body className={styles.cardBody}>
                  
                  <Card.Title className={styles.cardTitle}>{projeto.titulo}</Card.Title>
                  
                  <div className={styles.techStack}>
                    {projeto.techs.map((tech, i) => (
                      <span key={i} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>

                  <Card.Text className={styles.cardText}>
                    {projeto.descricao}
                  </Card.Text>

                  <Button 
                    href={projeto.link} 
                    target="_blank" 
                    className={styles.btnProject}
                  >
                    Ver Código
                  </Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}