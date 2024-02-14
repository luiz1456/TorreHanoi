import CamadaPiramide from './components/CamadaPiramide'

import styles from './App.module.css'
import './index.css'

function App() {
  return (
    <>
      <div className="container">
        <div className={styles.containerGame}>
          <div className={styles.containerColunas}>
            <div className={styles.coluna}>
              <div className={styles.pinoColuna}>
              </div>
              < CamadaPiramide largura='95' />
              < CamadaPiramide largura='80' />
              < CamadaPiramide largura='65' />
              < CamadaPiramide largura='50' />
              < CamadaPiramide largura='35' />
            </div>
            <div className={styles.coluna}>
              <div className={styles.pinoColuna}></div>
            </div>
            <div className={styles.coluna}>
              <div className={styles.pinoColuna}></div>
            </div>
          </div>
          <div className={styles.base}></div>
        </div>
      </div>
    </>
  )
}

export default App
