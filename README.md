## How to use

1) install all package
```
npm install
```
2) go to src/custom/
3) edit files
   1) profile.info.js
   
    ```js
    // edit "./logo.png" to name of your file
    import logo from "./logo.png";
    
    //and edit lines inside obj data
    const data = {
    img: logo,
    user: "",
    description: "",
    background: "#fff"
    }
    ```

    1) links.info.js
   
    ```js
    // all needed info you have inside of that file
    const data = [{
        type: 'at',
        name: 'template', 
        url: 'custom url', 
        show: true,
        disclick: true
    }];
    ``` 

---

## Updates
* **Version 0.2.0**
  * Profile added
```
    + profile.plugin.js added
    * links.info.js - how to use info added
    + profile.info.js - added with how to use info.
```
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
