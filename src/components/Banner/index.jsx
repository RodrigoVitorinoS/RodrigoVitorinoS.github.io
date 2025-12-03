import styles from './Banner.module.css';
import banner from '../../assets/Banner2.png';

function Banner() {
  return (
    <div className={styles.bannerWrapper}>
        <img
            className={styles.imagem}
            src={banner}
            alt="Banner Data Alchemy" 
        />
    </div>
  );
}

export default Banner;