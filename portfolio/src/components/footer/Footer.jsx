import { useContext } from 'react';
import { FOOTER_CONSTANT } from './footer-constant.js'
import { LocaleContext } from "../../store/language-store";
import instgramImg from '../../assets/logo_instagram.svg'
import linkedinImg from '../../assets/logo_linkedin.svg'
import githubImg from '../../assets/logo_github.svg'
import './Footer.css'

export default function Footer() {
	const { locale } = useContext(LocaleContext)
	const title = FOOTER_CONSTANT[locale]?.title

	return (
		<footer>
			<div className="contacts">
				<p>{title}</p>
				<a href="https://www.instagram.com/haruhisayaguchi?igsh=MWpoc29pcnkwcDg1dg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
					<img className='logo' src={instgramImg} alt="Instagram Logo" />
				</a>
				<a href="https://www.linkedin.com/in/haruhisa-yaguchi-a1a53918b/" target="_blank" rel="noopener noreferrer">
					<img className='logo' src={linkedinImg} alt="LinkedIn Logo" />
				</a>
				<a href="https://github.com/haruhisayaguchi" target="_blank" rel="noopener noreferrer">
					<img className='logo' src={githubImg} alt="Github Logo" />
				</a>
			</div>
		</footer>
	)
}