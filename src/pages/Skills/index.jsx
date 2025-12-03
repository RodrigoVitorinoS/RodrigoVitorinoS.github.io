import { Container, Row, Col } from 'react-bootstrap';
import styles from './Skills.module.css';

export default function Skills() {
  
  const skillsData = [
    {
      categoria: "Ciência de Dados & IA",
      itens: [
        "Python", "Pandas", "NumPy", "Scikit-Learn", 
        "Machine Learning", "NLP", "Pytorch (Básico)", 
        "Data Visualization"
      ]
    },
    {
      categoria: "Engenharia & Desenvolvimento",
      itens: [
        "SQL", "Git / GitHub", "React.js", 
        "JavaScript", "HTML5 & CSS3", 
        "APIs REST"
      ]
    },
    {
      categoria: "Matemática & Otimização",
      itens: [
        "Otimização Matemática", "Algoritmos Genéticos", 
        "Estatística Inferencial", "Cálculo", 
        "Álgebra Linear", "Resolução de Problemas"
      ]
    }
  ];

  return (
    <section id="habilidades" className={styles.skillsSection}>
      <Container>
        
        <h2 className={styles.titulo}>
           Ferramentas & <span className={styles.destaque}>Habilidades</span>
        </h2>

        <Row>
          {skillsData.map((grupo, index) => (
            <Col lg={4} md={12} key={index} className="mb-4">
              
              <h3 className={styles.categoriaTitulo}>{grupo.categoria}</h3>
              
              <div className={styles.gridSkills}>
                {grupo.itens.map((skill, i) => (
                  <div key={i} className={styles.skillCard}>
                    {skill}
                  </div>
                ))}
              </div>

            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}