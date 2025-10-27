import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './WorksCard.css'

export default function WorksCard({ i, date, title, direction, handleCardMove, children }) {
	const [screenX, setScreenX] = useState(getXValue());

	function getXValue() {
		const width = window.innerWidth;
		if (width < 768) return 250;   // mobile
		if (width < 1200) return 450;  // tablet
		return 600;                    // desktop
	}

	useEffect(() => {
		const handleResize = () => setScreenX(getXValue());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const positions = {
		0: { x: -screenX, scale: 0.82, opacity: 1, z: 1 },
		1: { x: 0, scale: 1, opacity: 1, z: 2 },
		2: { x: screenX, scale: 0.82, opacity: 1, z: 1 },
	};

	return (
		<motion.div
			className='works-card-container'
			onClick={() => handleCardMove(i)}
			layout
			style={{
				pointerEvents: i !== 1 ? "auto" : "none",
				cursor: i !== 1 ? "pointer" : "default",
			}}
			initial={{ x: -direction * 400, opacity: 1 }}
			animate={positions[i]}
			exit={{ x: direction * 400, opacity: 0 }}
			transition={{ type: "spring", stiffness: 120, damping: 18 }}
		>
			<div className="works-card-date-container">
				<div className={`works-card-date works-card-date-${i === 1 ? 'center' : 'side'}`}>
					{date}
				</div>
			</div>
			<div className={`works-card works-card-${i === 1 ? 'center' : 'side'}`}>
				<div className={`works-card-title-${i === 1 ? 'center' : 'side'}`}>
					{title}
				</div>
				<div className={`works-card-name-${i === 1 ? 'center' : 'side'}`}>
					{children}
				</div>
			</div>
		</motion.div>
	)
}