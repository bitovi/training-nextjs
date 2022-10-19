import styles from "./SummaryItem.module.css"

const SummaryItem = ({label, amount}: any) =>{


  return(

    <div className={styles.summaryItem}>
          <p className={styles.label}>{label}</p>
          <p>${amount}</p>
        </div>

  )
}

export default SummaryItem