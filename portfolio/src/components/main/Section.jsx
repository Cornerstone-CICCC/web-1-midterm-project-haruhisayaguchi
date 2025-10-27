import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

import StickyHeader from '../main/StickyHeader'
import './Section.css'

export default function Section({ id, title, children }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1 0']
	})
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
	const x = useTransform(scrollYProgress, [0, 0.5, 1], ['-50%', '0%', '50%'])
	// const backgroundColor = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.9, 1], ["#0000FF", "#00FFF0", "#ddd", "#FFED29", "#FF2C2C"])

	return (
		<section id={id} className='section' ref={ref}>
			{/* <StickyHeader
				id={id}
				opacity={opacity}
				x={x}
			// backgroundColor={backgroundColor}
			>
				{title}
			</StickyHeader> */}
			{children}
		</section>
	)
}