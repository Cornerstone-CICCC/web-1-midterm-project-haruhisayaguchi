import { motion } from 'framer-motion'
import './StickyHeader.css'

export default function StickyHeader({ id, opacity, x, backgroundColor, children }) {
	return (
		<div className='sticky-header'>
			<div className="separator">
				<motion.h2
					className={`title text-${id}`}
					style={{ opacity }}
				>
					{children}
				</motion.h2>
				<motion.div
					className={`separator-line bg-${id}`}
					style={{
						opacity,
						x,
						// backgroundColor
					}}
				// variants={{
				// 	hidden: { opacity: 0, scaleX: 0 },
				// 	visible: { opacity: 1, scaleX: 1 }
				// }}
				// initial="hidden"
				// animate={controls}
				// whileInView={{ scaleX: 1 }}
				// transition={{ duration: 0.8, ease: "easeOut" }}
				/>
			</div>
		</div>
	)
}