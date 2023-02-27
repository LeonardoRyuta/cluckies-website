import styles from '../styles/FourOhFour.module.css'
import { NavBar } from '../components'

export default function FourOhFour() {
    return (
        <>
            <NavBar/>
            <div className={styles.mainContainer}>
                <h1>404 Page not Found</h1>
                <p>
                    You seem to have wandered too far. Please check your URL and try again.
                </p>
            </div>
        </>
    )
}