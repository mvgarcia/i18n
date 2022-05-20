import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

var ln = navigator.language;
var mess= ln==="es" ? localeEsMessages : localeEnMessages

ReactDOM.render(
	<IntlProvider locale={ln} messages= {mess}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
