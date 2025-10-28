import { motion } from 'framer-motion'
import img from '../../assets/arrow_right.svg'
import './Arrow.css'

export default function ArrowRight({ backgroundColor, onClick }) {
	return (
		<motion.button
			className='arrow-button arrow-button-right'
			initial={false}
			animate={{ backgroundColor }}
			aria-label="Next"
			onClick={onClick}
			whileTap={{ scale: 0.9 }}
		>
			<img src={img} alt="Arrow-Right" />
		</motion.button>
	)
}