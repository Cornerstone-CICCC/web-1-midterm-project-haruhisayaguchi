import { motion } from "framer-motion";
import './ProjectsCardDetail.css'

export default function ProjectsCardDetail({ i, id, title, backgroundColor, handleCardMove, children }) {
	const offset = i * 20
	const scale = 1 - i * 0.05
	const color = i === 0 ? '#ddd' : 'transparent'
	backgroundColor = i === 0 ? '#0f1412dd' : backgroundColor

	return (
		<motion.div
			className='projects-card-detail'
			onClick={() => handleCardMove(i)}
			style={{
				color,
				backgroundColor,
				backdropFilter: 'blur(2px)',
				pointerEvents: i === 0 ? "auto" : "none",
				cursor: i === 0 ? "pointer" : "default",
			}}
			initial={{ y: offset, x: 0, scale }}
			animate={{
				x: 0,
				y: offset,
				scale,
				zIndex: 4 - i,
				boxShadow: i === 0 ? "0px 8px 20px rgba(0,0,0,0.3)" : "none",
			}}
			whileTap={{ scale: 0.95 }}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 25
			}}
		>
			<p className='projects-card-detail-head'>{title}</p>
			<p className='projects-card-detail-main'>
				{children.split("\n").map((line, index) => (
					<span
						key={index}
					>
						{line}
						<br />
					</span>
				))}
			</p>
		</motion.div>
	)
}