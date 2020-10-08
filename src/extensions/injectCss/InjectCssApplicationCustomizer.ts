import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import * as strings from 'InjectCssApplicationCustomizerStrings';

const LOG_SOURCE: string = 'InjectCssApplicationCustomizer';


export interface IInjectCssApplicationCustomizerProperties {
  cssurl: string;
}

export default class InjectCssApplicationCustomizer
  extends BaseApplicationCustomizer<IInjectCssApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    let siteUrl = this.context.pageContext.web.absoluteUrl;
    const cssUrl: string = siteUrl + "/SiteAssets/custom.css";
    const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
    // inject the style sheet
    let customStyle: HTMLLinkElement = document.createElement("link");
    customStyle.href = cssUrl;
    customStyle.rel = "stylesheet";
    customStyle.type = "text/css";
    head.insertAdjacentElement("beforeEnd", customStyle);

    // inject the js script
    const jsUrl: string = siteUrl + "/SiteAssets/custom.js";
    let customJS = document.createElement("script");
    customJS.src = jsUrl;
    customJS.type = "text/javascript";
    head.insertAdjacentElement("beforeEnd", customJS);

    return Promise.resolve();
  }
}
