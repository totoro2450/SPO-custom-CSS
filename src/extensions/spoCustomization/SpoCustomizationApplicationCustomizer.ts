import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'SpoCustomizationApplicationCustomizerStrings';

const LOG_SOURCE: string = 'SpoCustomizationApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpoCustomizationApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpoCustomizationApplicationCustomizer
  extends BaseApplicationCustomizer<ISpoCustomizationApplicationCustomizerProperties> {

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
      
    return Promise.resolve();
  }
}
