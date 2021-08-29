import Select from "react-select";
import { At, Discord, Drive, Facebook, Github, Gmail, Instagram, LinkedIn, Messenger, Patreon, Pinterest, Private, Reddit, Site, Snapchat, Spotify, Steam, Telegram,Tiktok,Twitch,Twitter,Ubisoft, Vercel, Vimeo, Youtube }  from "../assets/@svg/react/solid/"

const ComboBox = () => {  
    
    const customSingleValue = ({ data }) => (
        <div className="combo-select">
                { data.icon } 
                <span className="combo-text">
                    { data.label }
                </span>
        </div>
    );
    let width = "25px";
    let statusOptions = [
        { value: "At", label: "At", icon: <At width={width}/> },
        { value: "Discord", label: "Discord", icon: <Discord width={width}/> },
        { value: "Drive", label: "Drive", icon: <Drive width={width}/> },
        { value: "Facebook", label: "Facebook", icon: <Facebook width={width}/> },
        { value: "Github", label: "Github", icon: <Github width={width}/> },
        { value: "Gmail", label: "Gmail", icon: <Gmail width={width}/> },
        { value: "Instagram", label: "Instagram", icon: <Instagram width={width}/> },
        { value: "LinkedIn", label: "LinkedIn", icon: <LinkedIn width={width}/> },
        { value: "Messenger", label: "Messenger", icon: <Messenger width={width}/> },
        { value: "Patreon", label: "Patreon", icon: <Patreon width={width}/> },
        { value: "Pinterest", label: "Pinterest", icon: <Pinterest width={width}/> },
        { value: "Private", label: "Private", icon: <Private width={width}/> },
        { value: "Reddit", label: "Reddit", icon: <Reddit width={width}/> },
        { value: "Site", label: "Site", icon: <Site width={width}/> },
        { value: "Snapchat", label: "Snapchat", icon: <Snapchat width={width}/> },
        { value: "Spotify", label: "Spotify", icon: <Spotify width={width}/> },
        { value: "Steam", label: "Steam", icon: <Steam width={width}/> },
        { value: "Telegram", label: "Telegram", icon: <Telegram width={width}/> },
        { value: "Tiktok", label: "Tiktok", icon: <Tiktok width={width}/> },
        { value: "Twitch", label: "Twitch", icon: <Twitch width={width}/> },
        { value: "Twitter", label: "Twitter", icon: <Twitter width={width}/> },
        { value: "Ubisoft", label: "Ubisoft", icon: <Ubisoft width={width}/> },
        { value: "Vercel", label: "Vercel", icon: <Vercel width={width}/> },
        { value: "Vimeo", label: "Vimeo", icon: <Vimeo width={width}/> },
        { value: "Youtube", label: "Youtube", icon: <Youtube width={width}/> },
    ]

    return (
        <>
            <form>

                <Select 
                    className="combo-select"
                    defaultValue={ statusOptions[0] }
                    options={ statusOptions }
                    components={ {SingleValue: customSingleValue } }
                    />
            </form>
        </>
    );
}

export default ComboBox;