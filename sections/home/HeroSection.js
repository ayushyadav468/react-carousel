import Image from 'next/image';
import Carousel from 'components/Carousel/Carousel';
import Button from 'components/Button/Button';

import styles from './HeroSection.module.scss';

const HeroSection = ({ backgroundPhoto }) => {
	// Slider data can be fetched from backend
	const slidesData = [
		{
			subHeading: 'GET ACCESS TO',
			heading: 'Exclusive Masterclasses by the maestros',
			detailPara: 'Enroll with Artium and enjoy four masterclasses for FREE!',
			actionBtnText: 'Book A Free Trial'
		},
		{
			subHeading: 'GET ACCESS TO',
			heading: 'Exclusive Masterclasses by the maestros',
			detailPara: 'Enroll with Artium and enjoy four masterclasses for FREE!',
			actionBtnText: 'Book A Free Trial'
		},
		{
			subHeading: 'GET ACCESS TO',
			heading: 'Exclusive Masterclasses by the maestros',
			detailPara: 'Enroll with Artium and enjoy four masterclasses for FREE!',
			actionBtnText: 'Book A Free Trial'
		},
		{
			subHeading: 'GET ACCESS TO',
			heading: 'Exclusive Masterclasses by the maestros',
			detailPara: 'Enroll with Artium and enjoy four masterclasses for FREE!',
			actionBtnText: 'Book A Free Trial'
		}
	];

	return (
		<div className={styles.Section}>
			<Carousel>
				{slidesData.map((slide, index) => {
					return (
						<section
							className={styles.Carousel_Item_Container}
							key={`${index}_${Math.random() * 100}`}
						>
							{/* Below div have a background filter of black with 50% opacity*/}
							<div className={styles.Carousel_Content_Container}>
								<div className={styles.Carousel_Content_Wrapper}>
									<h1 className={styles.Main_Heading}>{slide.subHeading}</h1>
									<h2 className={styles.Sub_Heading}>{slide.heading}</h2>
									<p className={styles.Para}>{slide.detailPara}</p>
									{/* Pass Button click listener */}
									<Button btnType='ActionBtn' btnTitle='Book a free class'>
										{slide.actionBtnText}
									</Button>
								</div>
							</div>
							{/* Background Image position:absolute to cover whole page */}
							<Image
								src={backgroundPhoto[index] || '/images/hero-section-1.jpg'}
								alt='background'
								layout='fill'
								priority
							/>
						</section>
					);
				})}
			</Carousel>
		</div>
	);
};

export default HeroSection;
