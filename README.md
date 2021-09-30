## How to use

*   ***src/links/links.js***
    *   Folder stores you sites
    *   to set sites export needs to be array of objects

```js
// like this
export default [
      {type: 'github', name: 'My github', url: 'https://github.com/kopytkg', show: false},
      {type: 'facebook', name: 'Profile', url: 'https://www.facebook.com/Kopyy', show: false},
      {type: 'instagram', name: 'Nothing interesting', url: 'https://www.instagram.com/kopy_the_krew/', show: false},
      {type: 'discord', name: 'The Krew', url: 'https://discord.gg/ZtjNUMHm8C', show: false}
];
```
### link object
1) type
* types are preset in svg loader
  
at | 
discord |
drive  |
facebook  |
github  |
gmail  |
instagram  |
linkedin  |
messenger  |
patreon  |
pinterest  |
private  |
reddit  |
site  |
snapchat  |
spotify  |
steam  |
telegram  |
tiktok  |
twitch  |
twitter  |
ubisoft  |
vercel  |
vimeo  |
youtube   |
1) name
* name can be set by the user
2) link
* link has to be set by the user
3) url
* is a boolean. True - show the url under name / False - hides url
---

## Updates
* **Version 0.1.9**
  * Version set to static
```
    + links/links.js file to store links
```
* **Version 0.1.8**
```
    * Combobox now has Onchange handler
    * linkbox now has "onSubmit" event (for testing it is onClick later will be onSubmit)
    + Admin layout has been changed. Now supports Load event and newSlot event. Needed for API.
    ! Next step will be API
```
* **Version 0.1.7**
```
    + new background patterns added.
    + color palette has been added.
    * dark / light theme colors fixed.
    * linkbox added way to show and hide url.
```
* **version 0.1.6**
```
    + public/full/ has been added.
    + icon.png full resolution of favicon has been added
    * linkbox common view added.
    * favicon has been changed.
    + svg loader plugin added

```
* **version 0.1.5**
```
    + theme.plugin has been added.
    * theme color scheme has been tweak.
    * Admin layout now has theme dropdown selection.
```
* **version 0.1.4**
```
    + Added bootstrap
    + ThemeWrapper added and themes in scss
    + Added Admin layout POINT
    + Added routes.js
    * Linkbox redo -> The linkbox was rebuild to use bootstrap
```

* **version 0.1.3**
```
    * changed styling to linkbox
    ! combobox still needs to be fixed. Height still dont work.
```

* **version 0.1.2**
```
    + added _linkbox.scss
    + created styling for linkbox component
    + added general.scss
    - removed index.css
```

* **version 0.1.1**
```
    + @SVG folder added
    + added default sass
    + added brain for linkbox.js
    . moved index.css

```
* **version 0.1.0**
```
 Inital update. Packages have been added to package.json.
```
