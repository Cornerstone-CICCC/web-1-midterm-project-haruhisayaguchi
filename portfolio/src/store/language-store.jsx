import { createContext, useState } from "react";

export const LocaleContext = createContext({
	locale: '',
	selectLocale: () => { }
})

export default function LocaleContextProvider({ children }) {
	const [locale, setLocale] = useState('EN')

	function selectLocale(locale) {
		setLocale(locale)
	}

	const localeContext = {
		locale,
		selectLocale
	}

	return (
		<LocaleContext.Provider value={localeContext} >
			{children}
		</LocaleContext.Provider>
	)
}