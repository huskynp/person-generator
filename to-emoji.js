// modified version of https://github.com/meeDamian/country-emoji

const countries = {
    "AD": ["Andorra", "Andorran"],
    "AE": ["United Arab Emirates", "UAE", "Emirati"],
    "AF": ["Afghanistan", "Afghan"],
    "AG": ["Antigua and Barbuda", "Antiguan, Barbudan"],
    "AI": ["Anguilla", "Anguillian"],
    "AL": ["Albania", "Albanian"],
    "AM": ["Armenia", "Armenian"],
    "AN": "Netherlands Antilles",
    "AO": ["Angola", "Angolan"],
    "AQ": ["Antarctica", "Antarctican"],
    "AR": ["Argentina", "Argentine"],
    "AS": ["American Samoa", "American Samoan"],
    "AT": ["Austria", "Austrian"],
    "AU": ["Australia", "Australian"],
    "AW": ["Aruba", "Aruban"],
    "AX": ["Åland Islands", "Ålandish"],
    "AZ": ["Azerbaijan", "Azerbaijani"],
    "BA": ["Bosnia and Herzegovina", "Bosnian, Herzegovinian"],
    "BB": ["Barbados", "Barbadian"],
    "BD": ["Bangladesh", "Bangladeshi"],
    "BE": ["Belgium", "Belgian"],
    "BF": ["Burkina Faso", "Burkinabe"],
    "BG": ["Bulgaria", "Bulgarian"],
    "BH": ["Bahrain", "Bahraini"],
    "BI": ["Burundi", "Burundian"],
    "BJ": ["Benin", "Beninese"],
    "BL": ["Saint Barthélemy", "Barthélemois", "Saint Barth"],
    "BM": ["Bermuda", "Bermudian"],
    "BN": ["Brunei Darussalam", "Bruneian"],
    "BO": ["Bolivia", "Bolivian"],
    "BR": ["Brazil", "Brazilian"],
    "BS": ["Bahamas", "Bahamian"],
    "BT": ["Bhutan", "Bhutanese"],
    "BQ": "Caribbean Netherlands",
    "BV": "Bouvet Island",
    "BW": ["Botswana", "Motswana"],
    "BY": ["Belarus", "Belarusian"],
    "BZ": ["Belize", "Belizean"],
    "CA": ["Canada", "Canadian"],
    "CC": ["Cocos (Keeling) Islands", "Cocos Islander"],
    "CD": ["Congo, The Democratic Republic of the"],
    "CF": ["Central African Republic", "Central African"],
    "CG": ["Congo"],
    "CH": ["Switzerland", "Swiss"],
    "CI": ["Cote D'Ivoire", "Ivorian"],
    "CK": ["Cook Islands", "Cook Islander"],
    "CL": ["Chile", "Chilean"],
    "CM": ["Cameroon", "Cameroonian"],
    "CN": ["China", "Chinese"],
    "CO": ["Colombia", "Colombian"],
    "CR": ["Costa Rica", "Costa Rican"],
    "CU": ["Cuba", "Cuban"],
    "CV": ["Cape Verde", "Cape Verdian"],
    "CW": ["Curaçao", "Curaçaoan"],
    "CX": ["Christmas Island", "Christmas Islander"],
    "CY": ["Cyprus", "Cypriot"],
    "CZ": ["Czechia", "Czech Republic", "Czech"],
    "DE": ["Germany", "German"],
    "DJ": ["Djibouti"],
    "DK": ["Denmark", "Danish"],
    "DM": ["Dominica"],
    "DO": ["Dominican Republic"],
    "DZ": ["Algeria", "Algerian"],
    "EC": ["Ecuador", "Ecuadorean"],
    "EE": ["Estonia", "Estonian"],
    "EG": ["Egypt", "Egyptian"],
    "EH": ["Western Sahara", "Sahrawi"],
    "ER": ["Eritrea", "Eritrean"],
    "ES": ["Spain", "Spanish"],
    "ET": ["Ethiopia", "Ethiopian"],
    "EU": "European Union",
    "FI": ["Finland", "Finnish"],
    "FJ": ["Fiji", "Fijian"],
    "FK": ["Falkland Islands (Malvinas)", "Falkland Islander"],
    "FM": ["Micronesia, Federated States of", "Micronesian"],
    "FO": ["Faroe Islands", "Faroese"],
    "FR": ["France", "French"],
    "GA": ["Gabon", "Gabonese"],
    "GB": ["United Kingdom", "UK", "British"],
    "GD": ["Grenada", "Grenadian"],
    "GE": ["Georgia", "Georgian"],
    "GF": ["French Guiana", "Guianan"],
    "GG": ["Guernsey"],
    "GH": ["Ghana", "Ghanaian"],
    "GI": ["Gibraltar"],
    "GL": ["Greenland", "Greenlandic"],
    "GM": ["Gambia", "Gambian"],
    "GN": ["Guinea", "Guinean"],
    "GP": ["Guadeloupe", "Guadeloupian"],
    "GQ": ["Equatorial Guinea", "Equatorial Guinean"],
    "GR": ["Greece", "Greek"],
    "GS": ["South Georgia and the South Sandwich Islands", "South Georgian South Sandwich Islander"],
    "GT": ["Guatemala", "Guatemalan"],
    "GU": ["Guam", "Guamanian"],
    "GW": ["Guinea-Bissau", "Guinea-Bissauan"],
    "GY": ["Guyana", "Guyanese"],
    "HK": ["Hong Kong", "Hong Konger"],
    "HM": ["Heard Island and Mcdonald Islands", "Heard and McDonald Islander"],
    "HN": ["Honduras", "Honduran"],
    "HR": ["Croatia", "Croatian"],
    "HT": ["Haiti", "Haitian"],
    "HU": ["Hungary", "Hungarian"],
    "ID": ["Indonesia", "Indonesian"],
    "IE": ["Ireland", "Irish"],
    "IL": ["Israel", "Israeli"],
    "IM": ["Isle of Man", "Manx"],
    "IN": ["India", "Indian"],
    "IO": ["British Indian Ocean Territory"],
    "IQ": ["Iraq", "Iraqi"],
    "IR": ["Iran, Islamic Republic Of", "Iranian"],
    "IS": ["Iceland", "Icelander"],
    "IT": ["Italy", "Italian"],
    "JE": ["Jersey"],
    "JM": ["Jamaica", "Jamaican"],
    "JO": ["Jordan", "Jordanian"],
    "JP": ["Japan", "Japanese"],
    "KE": ["Kenya", "Kenyan"],
    "KG": ["Kyrgyzstan", "Kirghiz"],
    "KH": ["Cambodia", "Cambodian"],
    "KI": ["Kiribati", "I-Kiribati"],
    "KM": ["Comoros", "Comoran"],
    "KN": ["Saint Kitts and Nevis", "Kittitian or Nevisian"],
    "KP": ["Korea, Democratic People's Republic of", "North Korea", "North Korean", "DPRK"],
    "KR": ["Korea, Republic of", "South Korea", "South Korean"],
    "KW": ["Kuwait", "Kuwaiti"],
    "KY": ["Cayman Islands", "Caymanian"],
    "KZ": ["Kazakhstan", "Kazakhstani"],
    "LA": ["Lao People's Democratic Republic", "Laotian"],
    "LB": ["Lebanon", "Lebanese"],
    "LC": ["Saint Lucia", "Saint Lucian"],
    "LI": ["Liechtenstein", "Liechtensteiner"],
    "LK": ["Sri Lanka", "Sri Lankan"],
    "LR": ["Liberia", "Liberian"],
    "LS": ["Lesotho", "Mosotho"],
    "LT": ["Lithuania", "Lithuanian"],
    "LU": ["Luxembourg", "Luxembourger"],
    "LV": ["Latvia", "Latvian"],
    "LY": ["Libyan Arab Jamahiriya", "Libyan"],
    "MA": ["Morocco", "Moroccan"],
    "MC": ["Monaco", "Monegasque"],
    "MD": ["Moldova, Republic of", "Moldovan"],
    "ME": ["Montenegro", "Montenegrin"],
    "MF": ["Saint Martin", "Saint-Martinois"],
    "MG": ["Madagascar", "Malagasy"],
    "MH": ["Marshall Islands", "Marshallese"],
    "MK": ["Republic of North Macedonia", "North Macedonia", "Macedonia, The Former Yugoslav Republic of", "Macedonian"],
    "ML": ["Mali", "Malian"],
    "MM": ["Myanmar", "Burma", "Burmese"],
    "MN": ["Mongolia", "Mongolian"],
    "MO": ["Macao", "Macau", "Macanese"],
    "MP": ["Northern Mariana Islands"],
    "MQ": ["Martinique"],
    "MR": ["Mauritania", "Mauritanian"],
    "MS": ["Montserrat", "Montserratian"],
    "MT": ["Malta", "Maltese"],
    "MU": ["Mauritius", "Mauritian"],
    "MV": ["Maldives", "Maldivan"],
    "MW": ["Malawi", "Malawian"],
    "MX": ["Mexico", "Mexican"],
    "MY": ["Malaysia", "Malaysian"],
    "MZ": ["Mozambique", "Mozambican"],
    "NA": ["Namibia", "Namibian"],
    "NC": ["New Caledonia", "New Caledonian"],
    "NE": ["Niger", "Nigerien"],
    "NF": ["Norfolk Island", "Norfolk Islander"],
    "NG": ["Nigeria", "Nigerian"],
    "NI": ["Nicaragua", "Nicaraguan"],
    "NL": ["Netherlands", "Dutch"],
    "NO": ["Norway", "Norwegian"],
    "NP": ["Nepal", "Nepalese"],
    "NR": ["Nauru", "Nauruan"],
    "NU": ["Niue", "Niuean"],
    "NZ": ["New Zealand", "New Zealander"],
    "OM": ["Oman", "Omani"],
    "PA": ["Panama", "Panamanian"],
    "PE": ["Peru", "Peruvian"],
    "PF": ["French Polynesia", "French Polynesian"],
    "PG": ["Papua New Guinea", "Papua New Guinean"],
    "PH": ["Philippines", "Filipino"],
    "PK": ["Pakistan", "Pakistani"],
    "PL": ["Poland", "Polish"],
    "PM": ["Saint Pierre and Miquelon"],
    "PN": ["Pitcairn", "Pitcairn Islander"],
    "PR": ["Puerto Rico", "Puerto Rican"],
    "PS": ["Palestinian Territory, Occupied", "Palestine", "Palestinian"],
    "PT": ["Portugal", "Portuguese"],
    "PW": ["Palau", "Palauan"],
    "PY": ["Paraguay", "Paraguayan"],
    "QA": ["Qatar", "Qatari"],
    "RE": ["Reunion"],
    "RO": ["Romania", "Romanian"],
    "RS": ["Serbia", "Serbian"],
    "RU": ["Russian Federation", "Russian"],
    "RW": ["Rwanda", "Rwandan"],
    "SA": ["Saudi Arabia", "Saudi Arabian"],
    "SB": ["Solomon Islands", "Solomon Islander"],
    "SC": ["Seychelles", "Seychellois"],
    "SD": ["Sudan", "Sudanese"],
    "SE": ["Sweden", "Swedish"],
    "SG": ["Singapore", "Singaporean"],
    "SH": ["Saint Helena", "Saint Helenian"],
    "SI": ["Slovenia", "Slovene"],
    "SJ": ["Svalbard and Jan Mayen"],
    "SK": ["Slovakia", "Slovak"],
    "SL": ["Sierra Leone", "Sierra Leonean"],
    "SM": ["San Marino", "Sammarinese"],
    "SN": ["Senegal", "Senegalese"],
    "SO": ["Somalia", "Somali"],
    "SR": ["Suriname", "Surinamer"],
    "SS": ["Republic of South Sudan", "South Sudan", "South Sudanese"],
    "ST": ["Sao Tome and Principe", "Sao Tomean"],
    "SV": ["El Salvador", "Salvadoran"],
    "SX": ["Sint Maarten", "Sint Maartener"],
    "SY": ["Syrian Arab Republic", "Syrian"],
    "SZ": ["Swaziland", "Swazi"],
    "TC": ["Turks and Caicos Islands", "Turks and Caicos Islander"],
    "TD": ["Chad", "Chadian"],
    "TF": ["French Southern Territories"],
    "TG": ["Togo", "Togolese"],
    "TH": ["Thailand", "Thai"],
    "TJ": ["Tajikistan", "Tadzhik"],
    "TK": ["Tokelau", "Tokelauan"],
    "TL": ["Timor-Leste", "East Timorese"],
    "TM": ["Turkmenistan", "Turkmen"],
    "TN": ["Tunisia", "Tunisian"],
    "TO": ["Tonga", "Tongan"],
    "TR": ["Turkey", "Turkish"],
    "TT": ["Trinidad and Tobago", "Trinidadian"],
    "TV": ["Tuvalu", "Tuvaluan"],
    "TW": ["Taiwan", "Taiwanese"],
    "TZ": ["Tanzania, United Republic of", "Tanzanian"],
    "UA": ["Ukraine", "Ukrainian"],
    "UG": ["Uganda", "Ugandan"],
    "UM": ["United States Minor Outlying Islands"],
    "US": ["United States", "USA", "American"],
    "UY": ["Uruguay", "Uruguayan"],
    "UZ": ["Uzbekistan", "Uzbekistani"],
    "VA": ["Holy See (Vatican City State)", "Vatican"],
    "VC": ["Saint Vincent and the Grenadines", "Saint Vincentian"],
    "VE": ["Venezuela", "Venezuelan"],
    "VG": ["Virgin Islands, British"],
    "VI": ["Virgin Islands, U.S."],
    "VN": ["Vietnam", "Viet Nam", "Vietnamese"],
    "VU": ["Vanuatu", "Ni-Vanuatu"],
    "WF": ["Wallis and Futuna", "Wallis and Futuna Islander"],
    "WS": ["Samoa", "Samoan"],
    "XK": ["Kosovo", "Kosovar"],
    "YE": ["Yemen", "Yemeni"],
    "YT": ["Mayotte", "Mahoran"],
    "ZA": ["South Africa", "South African"],
    "ZM": ["Zambia", "Zambian"],
    "ZW": ["Zimbabwe", "Zimbabwean"]
}


const MAGIC_NUMBER = 127462 - 65;

function fuzzyCompare(input, name) {
	name = name.toLowerCase();

	// Cases like:
	//    "Vatican" <-> "Holy See (Vatican City State)"
	//    "Russia"  <-> "Russian Federation"
	if (name.includes(input) || input.includes(name)) {
		return true;
	}

	// Cases like:
	//    "British Virgin Islands" <-> "Virgin Islands, British"
	//    "Republic of Moldova"    <-> "Moldova, Republic of"
	if (name.includes(',')) {
		const reversedName = name.split(', ').reverse().join(' ');
		if (reversedName.includes(input) || input.includes(reversedName)) {
			return true;
		}
	}

	return false;
}

const NAME_RE = /^.{2,}$/;

function nameToCode(name) {
	if (!name || !NAME_RE.test(name)) {
		return;
	}

	name = name.trim().toLowerCase();

	// Look for exact match
	// NOTE: normal loop to terminate ASAP
	for (const code in countries) {
		if ({}.hasOwnProperty.call(countries, code)) {
			let names = countries[code];

			if (!Array.isArray(names)) {
				names = [names];
			}

			for (const n of names) {
				if (n.toLowerCase() === name) {
					return code;
				}
			}
		}
	}

	// Look for inexact match
	// NOTE: .filter() to aggregate all matches
	const matches = Object.keys(countries)
		.filter(code => {
			let names = countries[code];

			if (!Array.isArray(names)) {
				names = [names];
			}

			for (const n of names) {
				if (fuzzyCompare(name, n)) {
					return true;
				}
			}

			return false;
		});

	// Return only when exactly one match was found
	//   prevents cases like "United"
	if (matches.length === 1) {
		return matches[0];
	}
}

function isCode(code) {
	code = code.toUpperCase();

	return countries[code] ? code : undefined;
}

const CODE_RE = /^[a-z]{2}$/i;

function codeToFlag(code) {
	if (!code || !CODE_RE.test(code)) {
		return;
	}

	code = isCode(code);
	if (!code) {
		return;
	}

	if (String && String.fromCodePoint) {
		return String.fromCodePoint(...[...code].map(c => MAGIC_NUMBER + c.charCodeAt(0)));
	}
}

function flag(input) {
	if (!CODE_RE.test(input) || input === 'UK') {
		input = nameToCode(input);
	}

	return codeToFlag(input);
}