import { At, Discord, Drive, Facebook, Github, Gmail, Instagram, LinkedIn, Messenger, Patreon, Pinterest, Private, Reddit, Site, Snapchat, Spotify, Steam, Telegram, Tiktok, Twitch, Twitter, Ubisoft, Vercel, Vimeo, Youtube } from "../../../assets/@svg/react/solid"

function SVGloader(props) {
    const width = "50px";
    switch(props.type) {
        default:
            return(null);
            break;
        case "at": 
                return(<At width={width} />);
                break;
        case "discord": 
                return(<Discord width={width} />);
                break;
        case "drive": 
                return(<Drive width={width} />);
                break;
        case "facebook": 
                return(<Facebook width={width} />);
                break;
        case "github": 
                return(<Github width={width} />);
                break;
        case "gmail": 
                return(<Gmail width={width} />);
                break;
        case "instagram": 
                return(<Instagram width={width} />);
                break;
        case "linkedin": 
                return(<LinkedIn width={width} />);
                break;
        case "messenger": 
                return(<Messenger width={width} />);
                break;
        case "patreon": 
                return(<Patreon width={width} />);
                break;
        case "pinterest": 
                return(<Pinterest width={width} />);
                break;
        case "private": 
                return(<Private width={width} />);
                break;
        case "reddit": 
                return(<Reddit width={width} />);
                break;
        case "site": 
                return(<Site width={width} />);
                break;
        case "snapchat": 
                return(<Snapchat width={width} />);
                break;
        case "spotify": 
                return(<Spotify width={width} />);
                break;
        case "steam": 
                return(<Steam width={width} />);
                break;
        case "telegram": 
                return(<Telegram width={width} />);
                break;
        case "tiktok": 
                return(<Tiktok width={width} />);
                break;
        case "twitch": 
                return(<Twitch width={width} />);
                break;
        case "twitter": 
                return(<Twitter width={width} />);
                break;
        case "ubisoft": 
                return(<Ubisoft width={width} />);
                break;
        case "vercel": 
                return(<Vercel width={width} />);
                break;
        case "vimeo": 
                return(<Vimeo width={width} />);
                break;
        case "youtube": 
                return(<Youtube width={width} />);
                break;
    }
}

export default SVGloader;