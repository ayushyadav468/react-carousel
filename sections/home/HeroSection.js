import Image from 'next/image';
import Carousel from 'components/Carousel/Carousel';
import Button from 'components/Button/Button';

import styles from './HeroSection.module.scss';

const HeroSection = ({ backgroundPhoto }) => {
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
							<div className={styles.Carousel_Content_Container}>
								<div className={styles.Carousel_Content_Wrapper}>
									<h1 className={styles.Main_Heading}>{slide.subHeading}</h1>
									<h2 className={styles.Sub_Heading}>{slide.heading}</h2>
									<p className={styles.Para}>{slide.detailPara}</p>
									<Button btnType='ActionBtn' btnTitle='Book a free class'>
										{slide.actionBtnText}
									</Button>
								</div>
							</div>
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
