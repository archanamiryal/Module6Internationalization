import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate/services/translate.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {
    public langs: any[];
    public translatedText: string;
    public supportedLanguages: any[];

    today = Date.now();
    dateLabel = 'date and time';

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
      // standing data
      this.langs = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' },
        { display: '中文', value: 'zh' },
      ];

      this.selectLang('es');
    }

    isCurrentLang(lang: string) {
      return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
      // set default language;
      this._translate.use(lang);
    }
}