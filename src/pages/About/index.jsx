import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.css';
import semanaMatematicaRodrigo from '../../assets/rodrigoSemanaMatematica.jpeg';

export default function About() {
    return (
        <section id="resumo" className={styles.aboutSection}>
            <Container>
                <Row className="align-items-center">
                    
                    <Col lg={6} md={12} className="mb-4 mb-lg-0">
                        <div className={styles.contentWrapper}>
                            <h2 className={styles.titulo}>
                                Rigor Matemático Aplicado a <span className={styles.destaque}>Dados</span>
                            </h2>

                            <p className={styles.paragrafo}>
                                Minha trajetória é definida pela busca constante por precisão e eficiência. 
                                Como <strong>Licenciado em Matemática</strong> e mestrando em <strong>Modelagem Computacional</strong> (UFRRJ), 
                                desenvolvi uma base analítica que vai muito além do uso de ferramentas prontas.
                            </p>
                            
                            <p className={styles.paragrafo}>
                                Meu diferencial está na capacidade de entender a estatística e a otimização 
                                por trás dos algoritmos de <strong>Machine Learning</strong>, garantindo modelos mais robustos e confiáveis. 
                                Combino esse background teórico com habilidades práticas em <strong>Python, SQL e Engenharia de IA</strong>.
                            </p>
                            
                            <p className={styles.paragrafo}>
                                Em transição para a área de Dados, busco aplicar essa disciplina acadêmica 
                                para resolver problemas reais de negócio, transformando números em estratégias claras.
                            </p>

                            <div className={styles.quoteBox}>
                                "Não busco apenas respostas nos dados, busco a solução ótima para o problema."
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} className="text-center">
                        <div className={styles.imageContainer}>
                            <img 
                                src={semanaMatematicaRodrigo} 
                                alt="Rodrigo Vitorino" 
                                className={styles.profileImage} 
                            />
                            <div className={styles.imageBorder}></div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};