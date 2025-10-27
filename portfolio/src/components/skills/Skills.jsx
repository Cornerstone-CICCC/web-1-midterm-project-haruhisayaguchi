import Section from "../main/Section"
import SkillsItem from "./SkillsItem"
import './Skills.css'

const seniorLevelSkills = [
	'Back-end Development',
	'Java',
	'Spring Boot',
	'Restful API',
	'PostgreSQL',
	'Git',
	'SAP for Insurance',
]

const midLevelSkills = [
	'HTML',
	'Java Script',
	'AWS EC2',
	'AWS Lambda',
	'AWS S3',
	'AWS DynamoDB',
	'AWS EventBridge',
	'AWS Batch',
	'DDD',
	'Clean Architecture'
]

const juniorLevelSkills = [
	'Front-end Development',
	'CSS',
	'React',
	'NextJS',
	'Type Script',
	'Tailwind',
	'Docker',
	'Linux'
]

export default function Skills() {
	return (
		<Section id='skills' title="Skills">
			<div className="skills-content">
				<div className="skills-container">
					<SkillsItem
						items={seniorLevelSkills}
						title='Senior Level'
						to='left'
					/>
					<SkillsItem
						items={midLevelSkills}
						title='Mid Level'
						to='right'
					/>
					<SkillsItem
						items={juniorLevelSkills}
						title='Junior Level'
						to='left'
					/>
				</div>
			</div>
		</Section >
	)
}