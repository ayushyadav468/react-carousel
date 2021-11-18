import styles from './Header.module.scss';

const Header = ({ children }) => {
	return <header className={styles.Header}>{children}</header>;
};

export default Header;
