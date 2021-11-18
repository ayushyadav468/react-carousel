import styles from './Carousel.module.scss';
import Slider from 'react-slick';

const Carousel = ({ children }) => {
	// Render custom next arrow for navigation
	const NextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<svg
				className={[className, styles.Arrow_Btn, styles.Next_Btn].join(' ')}
				style={{
					...style
				}}
				onClick={onClick}
				width='19'
				height='31'
				viewBox='0 0 19 31'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18.8045 15.0311L3.91299 0.194693C3.65951 -0.0648978 3.24143 -0.0648978 2.98076 0.194693L0.190423 2.9762C-0.0634744 3.2358 -0.0634744 3.6459 0.190423 3.90549L11.8253 15.5025L0.190423 27.0996C-0.0634744 27.3591 -0.0634744 27.7692 0.190423 28.0289L2.98076 30.8104C3.24143 31.0632 3.65951 31.0632 3.91299 30.8104L18.8045 15.9604C19.0652 15.7076 19.0652 15.2975 18.8045 15.0311Z'
					fill='#E5E5E5'
				/>
			</svg>
		);
	};
	// Render custom previous arrow for navigation
	const PrevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<svg
				className={[className, styles.Arrow_Btn, styles.Prev_Btn].join(' ')}
				style={{
					...style
				}}
				onClick={onClick}
				width='19'
				height='31'
				viewBox='0 0 19 31'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0.195481 15.9689L15.087 30.8053C15.3405 31.0649 15.7586 31.0649 16.0192 30.8053L18.8096 28.0238C19.0635 27.7642 19.0635 27.3541 18.8096 27.0945L7.17473 15.4975L18.8096 3.90041C19.0635 3.64086 19.0635 3.23076 18.8096 2.97111L16.0192 0.189625C15.7586 -0.0632083 15.3405 -0.0632083 15.087 0.189625L0.195481 15.0396C-0.0651601 15.2924 -0.0651601 15.7025 0.195481 15.9689Z'
					fill='#E5E5E5'
				/>
			</svg>
		);
	};

	// Setting for carousel (dots are bottom indicators)
	const settings = {
		dots: false,
		infinite: true,
		speed: 600,
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		pauseOnHover: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};

	return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
