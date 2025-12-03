import { Nav } from 'react-bootstrap';
import styles from './MenuLink.module.css';

export default function MenuLink({ aba, to }) {
    
    return (
        <Nav.Link 
            href={to} 
            className={styles.link}
        >
            {aba}
        </Nav.Link>
    )
}