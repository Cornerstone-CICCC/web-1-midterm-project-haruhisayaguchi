import { motion } from 'framer-motion'
import img from '../../assets/arrow_left.svg'
import './Arrow.css'

export default function ArrowLeft({ backgroundColor, onClick }) {
	return (
		<motion.button
			className='arrow-button arrow-button-left'
			initial={false}
			animate={{ backgroundColor }}
			aria-label="Next"
			onClick={onClick}
			whileTap={{ scale: 0.9 }}
		>
			<img src={img} alt="Arrow-Left" />
		</motion.button>
	)
}