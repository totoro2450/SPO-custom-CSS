# SPFx Applications Customiser CSS and JS Injection
Hugo Bernier thank you for your solution! It's helpfull. 

This is copy of https://github.com/hugoabernier/react-application-injectcss with my small cutomization. 
Now this script will take custom.css and custom.js from current web "Site Assets". 

## Summary

> **Note**: This code is provided as a sample only. Keep in mind that Microsoft may change page elements and styles at any time, rendering your custom CSS useless. It is preferrable to use well-known HTML element placeholders.

When you need to make minor cosmetic changes to modern pages (e.g.:  match your corporate branding guidelines) and cannot use placeholders, you can create a custom CSS and inject on every modern page.

Please refrain from making drastic changes that may negatively impact your users' experience. If you experience issues with modern pages, please try disabling the extension before calling Microsoft Support to ensure that the issue isn't caused by your custom CSS.

## Used SharePoint Framework Version

![SPFx v1.8](https://img.shields.io/badge/SPFx-1.8-green.svg)

## Applies to

* [SharePoint Framework Extensions](https://dev.office.com/sharepoint/docs/spfx/extensions/overview-extensions)
* [Office 365 developer tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Solution

Solution|Author(s)
--------|---------
react-application-injectcss|Hugo Bernier ([Tahoe Ninjas](http://tahoeninjas.blog), @bernierh)

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|07 May, 2018|Initial release
1.1.0|18 October, 2018|Updated to SPFx 1.6
1.2.0|28 March, 2018|Updated to SPFx 1.8
1.3.0|08 October, 2020 | Using current web "Site Assets"

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

### Prepare the assets

1. create a custom CSS file that meets your needs. For example, this CSS will change the feedback button's background color to orange.

```CSS
.sitePage-uservoice-button {
  background-color: orange;
 }
```

2. Upload the CSS file as `custom.css` to your `Styles Library` on the site (i.e.: `https://<yourtenant>.sharepoint.com/sites/<site>/Style%20Library/Forms/AllItems.aspx`).
3. Navigate to your site. Your custom CSS should be applied.

### Build the solution

1. clone repo
2. Run `npm install`
3. Run `gulp bundle --ship`
4. Run `gulp package-solution --ship`

### Manual deployment

1. Upload the `react-application-injectcss.sppkg` from the `sharepoint` folder to your App catalog.
2. When prompted to deploy to all sites, choose the option that suits your needs.

## Features

Sample SharePoint Framework Application Customiser which injects a custom CSS in the HTML header.

This sample illustrates the following concepts on top of the SharePoint Framework:

* HTML manipulation

<img src="https://telemetry.sharepointpnp.com/sp-dev-fx-extensions/samples/readme-template" />
