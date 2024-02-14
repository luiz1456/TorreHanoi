import styles from './camada.module.css'

export default function CamadaPiramide({ largura }: any) {
  return (
    <div
      className={styles.camada}
      style={{ width: `${largura}%` }}
      draggable= 'true'
    ></div>
  )
}
