import PropTypes from 'prop-types'
import styles from './Container.module.scss'

const Container = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

Container.propTypes = {
    children: PropTypes.array,
}

export default Container
