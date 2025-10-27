import Menu from './Menu';
import LanguageDropdown from './LanguageDropdown';
import './Header.css';

export default function Header() {

	return (
		<header className="header">
			<nav className="nav">
				<Menu />
				<LanguageDropdown />
			</nav>
		</header>
	);
}