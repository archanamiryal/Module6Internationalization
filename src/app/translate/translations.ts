// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_DATE } from './translations/en/translate-en';
import { LANG_ES_NAME, LANG_ES_DATE } from './translations/es/translate-es';
import { LANG_ZH_NAME, LANG_ZH_DATE } from './translations/zh/translate-zh';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
	[LANG_EN_NAME]: LANG_EN_DATE,
	[LANG_ES_NAME]: LANG_ES_DATE,
	[LANG_ZH_NAME]: LANG_ZH_DATE
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];