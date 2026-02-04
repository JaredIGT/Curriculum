import { useTranslation } from 'react-i18next';
import '../styles/footer.css'

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t('footer.copy')}</p>
      <p>
        Made with Determination by JIGT 
        <svg id="nav-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="white" width="50" height="50" viewBox="0 0 30 30" style={{marginLeft: '0.5rem'}}>
          <path d="M24 8L24 6 22 6 22 4 20 4 20 6 18 6 18 8 17 8 16 8 16 10 14 10 14 8 13 8 12 8 12 6 10 6 10 4 8 4 8 6 6 6 6 8 4 8 4 10 4 18 6 18 6 20 8 20 8 22 10 22 10 24 12 24 12 26 15 26 18 26 18 24 20 24 20 22 22 22 22 20 24 20 24 18 26 18 26 10 26 8z"></path>
        </svg>
      </p>
    </footer>
  )
}
