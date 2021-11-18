import styles from './Button.module.scss';

const Button = ({ btnType, btnTitle, btnClickListener, children }) => {
	if (btnType === 'ActionBtn') {
		return (
			<button
				className={[styles.Btn, styles.Action_Btn].join(' ')}
				onClick={btnClickListener}
				title={btnTitle}
			>
				{children}
			</button>
		);
	}

	return (
		<button className={styles.Btn} onClick={btnClickListener} title={btnTitle}>
			{children}
		</button>
	);
};

export default Button;
