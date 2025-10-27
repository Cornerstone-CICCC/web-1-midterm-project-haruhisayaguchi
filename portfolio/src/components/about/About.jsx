import { useState, useContext } from 'react'
import { LocaleContext } from '../../store/language-store'
import { ABOUT_CONSTANT } from './about-constant'
import Section from '../main/Section'
import Card from './Card';
import introductionImg from '../../assets/introduction.jpg'
import profileImg from '../../assets/profile.jpg'
import strengthImg from '../../assets/strength.jpg'
import './About.css'

export default function About() {
	const { locale } = useContext(LocaleContext)
	const cardList = ABOUT_CONSTANT[locale].cardList
	const menuTitle = ABOUT_CONSTANT[locale].menuTitle
	const [activeCard, setActiveCard] = useState('introduction');

	function handleSelectCard(id) {
		setActiveCard(id);
	}

	return (
		<Section id='about' title={menuTitle}>
			<div className='about-content'>
				<div className="about-container">
					<div className='about-image-container'>
						<img
							className='about-image'
							src={introductionImg}
							alt="Introduction Image"
						/>
						<img
							className='about-image about-image-sub'
							src={profileImg}
							alt="Profile Image"
						/>
						<img
							className='about-image about-image-sub'
							src={strengthImg}
							alt="Strength Image"
						/>
					</div>
					<div className='about-card'>
						{cardList.map(card => (
							<Card
								key={card.id}
								id={card.id}
								isActive={activeCard === card.id}
								title={card.title}
								handleSelectCard={handleSelectCard}
							>
								{card.text}
							</Card>
						))
						}
					</div>
				</div>
			</div>
		</Section>
	)
}