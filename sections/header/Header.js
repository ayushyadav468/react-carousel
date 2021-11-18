import { useState } from 'react';
import Link from 'next/link';

import Button from 'components/Button/Button';

import styles from './Header.module.scss';

const Header = () => {
	const [menu, showMenu] = useState(false);
	// Hamberger menu click handler
	// Change css classes
	const onMobileMenuClick = () => {
		const prevMenuState = menu;
		showMenu(!prevMenuState);
	};

	let mobileHeaderClass = styles.Header;
	let mobileMenuClass = styles.Mobile_Menu_Btn;
	let headerLinks = styles.Header_Links_Container;
	if (menu) {
		mobileHeaderClass = [styles.Header, styles.Active_Header].join(' ');
		mobileMenuClass = [styles.Mobile_Menu_Btn, styles.Active_Mobile_Menu].join(
			' '
		);
		headerLinks = [
			styles.Header_Links_Container,
			styles.Active_Mobile_Header_Links_Container
		].join(' ');
	}

	return (
		<header className={mobileHeaderClass}>
			<div className={styles.Header_Container}>
				<div className={styles.Header_Logo_Container}>
					<Link href='#' passHref>
						<a className={styles.Logo} title='Home' aria-label='Home'>
							Logo
						</a>
					</Link>
				</div>
				<div className={headerLinks}>
					<ul className={styles.Header_Links_List}>
						<li className={styles.Header_Links}>
							<Link href='#' passHref>
								<a title='Courses' aria-label='Courses'>
									Courses
								</a>
							</Link>
						</li>
						<li className={styles.Header_Links}>
							<Link href='#' passHref>
								<a title='About' aria-label='About'>
									About
								</a>
							</Link>
						</li>
						<li className={styles.Header_Links}>
							<Link href='#' passHref>
								<a title='Become A Teacher' aria-label='Become A Teacher'>
									Become A Teacher
								</a>
							</Link>
						</li>
						<li
							className={[styles.Header_Links, styles.Mobile_Action_Links].join(
								' '
							)}
						>
							<Link href='#' passHref>
								<a title='Login' aria-label='Login'>
									Login
								</a>
							</Link>
							<Button btnType='ActionBtn' btnTitle='Book a free trial'>
								Book a Free Trial
							</Button>
						</li>
					</ul>
				</div>
				<span className={styles.Actions_Container}>
					<Link href='#' passHref>
						<a title='Login' aria-label='Login'>
							Login
						</a>
					</Link>
					<Button btnType='ActionBtn' btnTitle='Book a free trial'>
						Book a Free Trial
					</Button>
				</span>
				<div className={mobileMenuClass}>
					<button onClick={onMobileMenuClick}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
