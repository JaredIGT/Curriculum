import { useTranslation } from 'react-i18next';

export default function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <section id="welcome-section">
      <div className="home-content"> 
        <p className="bolder-text">{t('welcome.greeting')}</p>
        <h1>{t('welcome.name')}</h1>
        <p className="animated-text">${t('welcome.title')}</p>
        <h3>{t('welcome.subtitle')}</h3>
        <p>
          {t('welcome.description')}
        </p>
        <div className="social-links">
          <a href="https://github.com/jaredigt" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" fill="white" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
              6.53 5.47 7.59.4.07.55-.17.55-.38 
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94
              -.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
              -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 
              1.87.87 2.33.66.07-.52.28-.87.51-1.07
              -1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
              -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 
              2.2.82a7.65 7.65 0 012 0c1.53-1.04 
              2.2-.82 2.2-.82.44 1.1.16 1.92.08 
              2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 
              3.75-3.65 3.95.29.25.54.73.54 1.48 
              0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
              8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/jared-gt" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" fill="white" viewBox="0 0 50 50">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
          <a href="https://x.com/JarecGonzalezT" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" fill="white" viewBox="0 0 50 50">
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="photo-container">
        <img id="photo" src="/img/photo3.png" alt="Foto de perfil" width="200" />
        <a href="/cv.pdf" download className="download-cv-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          {t('welcome.downloadCv')}
        </a>
      </div>
    </section>
  )
}
