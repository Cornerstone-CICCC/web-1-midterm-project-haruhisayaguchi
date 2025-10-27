import { motion } from 'framer-motion';
import './LanguageButton.css'

export default function LanguageButton({ language, flagImg, isSelected, isOpen, handleSelectLanguage }) {
	return (
		<button
			className={`language-button ${isSelected ? 'selected' : ''}`}
			onClick={() => handleSelectLanguage(language)}
		>
			<img src={flagImg} alt={`${language} Flag`} className="flag" />
			<span>{language}</span>
			{isSelected &&
				<motion.span
					className="arrow"
					initial={false}
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					▼
				</motion.span>
			}
		</button>
	)
}