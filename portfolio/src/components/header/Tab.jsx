import { motion } from 'framer-motion';
import './Tab.css'

export default function Tab({ id, isSlected, handleSelectSection, children }) {
	return (
		<>
			<li key={id} className='tab'>
				<div className='link'>
					<a
						href={`#${id}`}
						className={id}
						onClick={() => handleSelectSection(id)}
					>
						{children}
					</a>
				</div>
				{/* {isSlected &&
					<motion.div layoutId="underline" className={`active-tab bg-${id}`} />
				} */}
			</li>
		</>
	)
}