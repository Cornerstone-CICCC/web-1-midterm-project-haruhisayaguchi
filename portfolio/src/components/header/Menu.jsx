import { useState, useContext } from 'react';
import { HEADER_CONSTANT } from './header-constant.js'
import { LocaleContext } from "../../store/language-store";
import Tab from "./Tab";
import './Menu.css';

export default function Menu() {
	const [selectedSection, setSelectedSection] = useState('home')
	const { locale } = useContext(LocaleContext)
	const sectionList = HEADER_CONSTANT[locale].sectionList

	function handleSelectSection(id) {
		setSelectedSection(id);
	}

	return (
		<menu className="menu">
			{sectionList.map(section => (
				<Tab
					key={section.id}
					id={section.id}
					isSlected={selectedSection === section.id}
					handleSelectSection={handleSelectSection}
				>
					{section.text}
				</Tab>
			))}
		</menu>)
}