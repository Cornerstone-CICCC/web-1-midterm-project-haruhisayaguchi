import './SkillsItem.css'

export default function SkillsItem({ items, title, to }) {
	return (
		<>
			<h3 className="skills-items-header">
				<div className='skills-items-title'>
					{title}
				</div>
			</h3>
			<div className="skills-items-container">
				<ul className={`skills-items-base skills-items-${to}-1`}>
					{[...items, ...items].map((skill, i) => (
						<li className="skills-item" key={i}>
							<div className="skills-item-name">{skill}</div>
						</li>
					))}
				</ul>
				<ul className={`skills-items-base skills-items-${to}-2`}>
					{[...items, ...items].map((skill, i) => (
						<li className="skills-item" key={i}>
							<div className="skills-item-name">{skill}</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}