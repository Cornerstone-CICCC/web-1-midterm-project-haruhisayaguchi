import { useContext, useState } from "react"
import { LocaleContext } from "../../store/language-store";
import LanguageButton from "./LanguageButton";
import usFlagImg from '../../assets/flag_usa.png'
import jpFlagImg from '../../assets/flag_jpn.png'
import './LanguageDropdown.css'

const languageList = [
	{ id: "EN", flag: usFlagImg },
	{ id: "JP", flag: jpFlagImg }
]

export default function LanguageDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const { locale, selectLocale } = useContext(LocaleContext)

	function handleSelectLanguage(language) {
		setIsOpen(prev => !prev)
		selectLocale(language)
	}

	return (
		<div className="language-dropdown">
			{languageList
				.filter(language => language.id === locale)
				.map(language => (
					<LanguageButton
						key={language.id}
						language={language.id}
						flagImg={language.flag}
						isSelected={true}
						isOpen={isOpen}
						handleSelectLanguage={handleSelectLanguage}
					/>
				))
			}
			{isOpen && (
				<ul className="language-menu">
					{languageList
						.filter(language => language.id !== locale)
						.map(language => (
							<LanguageButton
								key={language.id}
								language={language.id}
								flagImg={language.flag}
								isSelected={false}
								isOpen={isOpen}
								handleSelectLanguage={handleSelectLanguage}
							/>
						))
					}
				</ul>
			)}
		</div>
	)
}