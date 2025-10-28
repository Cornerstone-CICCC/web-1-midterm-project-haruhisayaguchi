import { motion, AnimatePresence } from "framer-motion"
import './Card.css'

export default function Card({ isActive, id, title, handleSelectCard, children }) {
	return (
		<div
			className={`card-container${isActive ? '-active' : ''}`}
			style={{
				backgroundColor: isActive ? "var(--about-dark-color)" : "var(--about-deep-dark-color)",
				backdropFilter: 'blur(2px)'
			}}
			onClick={() => handleSelectCard(id)}
		>
			<motion.div className='card-title'>
				<p>{title}</p>
			</motion.div>
			<AnimatePresence initial={false}>
				{isActive &&
					<motion.div
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: {
								opacity: 1,
								height: "auto"
							},
							collapsed: {
								opacity: 0,
								height: 0
							},
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<div className="card-body">
							<p>
								{children.split("\n").map((line, index) => (
									<span key={index}>
										{line}
										<br />
									</span>
								))}
							</p>
						</div>
					</motion.div>
				}
			</AnimatePresence>
		</div>
	)
}