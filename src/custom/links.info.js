/* example
    {
        * type is set by svg loader, it'll display svg icon of given application
        type: 'github',
        * name of button next to svg icon 
        name: 'My github', 
        * redirect url
        url: 'https://github.com/kopytkg', 
        * boolean to hide / show url
        show: false,
        * disclick is usefull in case you dont use url but tag. It'll disable click function on button
        disclick: true
    },

*/

const data = [
    {
        type: 'at',
        name: 'template', 
        url: 'custom url', 
        show: true,
        disclick: true
    },
];

export default data;