import { AnimatePresence, motion } from "framer-motion"
import { useState, useContext } from 'react'
import { LocaleContext } from '../../store/language-store'
import { PROJECTS_CONSTANT } from './projects-constant'
import Section from '../main/Section'
import ProjectsCardDetail from './ProjectsCardDetail'
import ArrowLeft from "../main/ArrowLeft"
import ArrowRight from "../main/ArrowRight"
import './Projects.css'

export default function Projects() {
	const { locale } = useContext(LocaleContext)
	const cardList = PROJECTS_CONSTANT[locale].cardList

	const [selectedItem, setSelectedItem] = useState(0)
	const [direction, setDirection] = useState(1)
	const [projectCard, setProjectCard] = useState(cardList[selectedItem].detail)

	function handleCardMove(index) {
		if (index !== 0) return;

		const newCard = [...projectCard];
		const [selected] = newCard.splice(index, 1);
		newCard.push(selected);
		setProjectCard(newCard);
	}

	function setSlide(newDirection) {
		const nextIndex = (selectedItem + newDirection + cardList.length) % cardList.length
		setSelectedItem(nextIndex)
		setProjectCard(cardList[nextIndex].detail)
		setDirection(newDirection)
	}

	const color = cardList[selectedItem].color

	return (
		<Section id='projects' title='Projects'>
			<div className="projects-content">
				<div className="projects-container">
					<ArrowLeft
						backgroundColor={color}
						onClick={() => setSlide(-1)}
					/>
					<AnimatePresence
						custom={direction}
						initial={false}
						mode="popLayout"
					>
						<motion.div
							key={selectedItem}
							className="projects-cards-container"
							initial={{ opacity: 0, x: direction * 50 }}
							animate={{
								opacity: 1,
								x: 0,
								transition: {
									delay: 0.2,
									type: "spring",
									visualDuration: 0.3,
									bounce: 0.4,
								},
							}}
							exit={{ opacity: 0, x: direction * -50 }}
						>
							<div className="projects-cards">
								<div className="project-date-container">
									<motion.div
										className="projects-date"
										initial={false}
										animate={{ backgroundColor: color }}
									>
										{cardList[selectedItem].startDate}
									</motion.div>
									<div className="projects-date-connector" />
									<motion.div
										className="projects-date"
										initial={false}
										animate={{ backgroundColor: color }}
									>
										{cardList[selectedItem].endDate}
									</motion.div>
								</div>
								{projectCard
									.map((card, index) => (
										<ProjectsCardDetail
											key={card.id}
											id={card.id}
											i={index}
											title={card.title}
											backgroundColor={card.backgroundColor}
											handleCardMove={handleCardMove}
										>
											{card.text}
										</ProjectsCardDetail>
									))}
							</div>
						</motion.div>
					</AnimatePresence>
					<ArrowRight
						backgroundColor={color}
						onClick={() => setSlide(1)}
					/>
				</div>
			</div>
		</Section >
	)
}