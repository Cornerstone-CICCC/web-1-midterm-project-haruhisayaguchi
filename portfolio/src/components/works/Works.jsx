import { useState, useContext } from "react"
import { AnimatePresence } from "framer-motion";
import { LocaleContext } from '../../store/language-store'
import { WORKS_CONSTANT } from "./works-constant"
import Section from "../main/Section"
import WorksCard from "./WorksCard"
import './Works.css'

export default function Works() {
	const { locale } = useContext(LocaleContext)
	const cardList = WORKS_CONSTANT[locale]?.cardList
	const [cards, setCards] = useState(cardList)
	const [direction, setDirection] = useState(null)

	function handleCardMove(index) {
		let newCards = [...cards];

		if (index === 0) {
			// clicked LEFT → move right
			setDirection(1)
			const last = newCards.pop();
			newCards = [last, ...newCards];
		} else {
			// clicked RIGHT → move left
			setDirection(-1)
			const first = newCards.shift();
			newCards = [...newCards, first];
		}

		newCards = newCards.map((card, i) => ({
			...card,
			uniqueIndex: `${card.title}-${Date.now()}-${i}`,
		}));

		setCards(newCards);
	}

	function sortCards(cards) {
		let newCards = cards.filter((_, index) => index === 0 || index === 1 || index === cards.length - 1)
		const last = newCards.pop()
		newCards = [last, ...newCards]
		return newCards
	}

	return (
		<Section id='works' title="Work Experiences">
			<div className="works-content">
				<div className="works-container">
					<div className="works-background" />
					<ul className='works-cards'>
						<AnimatePresence initial={false}>
							{sortCards(cards).map((card, index) => (
								<WorksCard
									key={card.uniqueIndex}
									i={index}
									date={`${card.startDate} - ${card.endDate}`}
									title={card.title}
									direction={direction}
									handleCardMove={handleCardMove}
								>
									{card.name}
								</WorksCard>
							))}
						</AnimatePresence>
					</ul>
				</div>
			</div>
		</Section>
	)
}