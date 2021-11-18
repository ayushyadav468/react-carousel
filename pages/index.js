import { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from 'sections/header/Header';
import HeroService from 'sections/home/HeroSection';
import styles from 'styles/Home.module.css';

export default function Home() {
	const [photo, setPhoto] = useState([]);

	// get the photos link from backend
	useEffect(() => {
		const getPhoto = async () => {
			try {
				const result = await fetch(`/api/images`);
				const data = await result.json();
				setPhoto([...data.imagesURL]); // set photos link to photo variable
			} catch (err) {
				console.log(err);
			}
		};

		getPhoto();
	}, []);

	return (
		<>
			<Head>
				<title>React Carousel</title>
				<meta name='description' content='React/NextJS Carousel' />
				<meta name='keywords' content='React NextJS Carousel' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Header />
				<HeroService backgroundPhoto={photo} />
			</main>
		</>
	);
}
