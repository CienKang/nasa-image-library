import {
    EmailShareButton, FacebookShareButton, PinterestShareButton, RedditShareButton, TelegramShareButton, TumblrShareButton, TwitterShareButton, WhatsappShareButton, EmailIcon,
    FacebookIcon, PinterestIcon, RedditIcon, TelegramIcon, TumblrIcon, TwitterIcon, WhatsappIcon
} from "react-share";

const Share = (props) => {

    const { data, index } = props;
    return (
        <div className="d-flex align-items-center ">
            <div > Share Images Via Link :</div>
            <div className="mx-1"><EmailShareButton url={data[index].url} ><EmailIcon size={40} round={true} /> </EmailShareButton></div>
            <div className="mx-1"><WhatsappShareButton url={data[index].url} ><WhatsappIcon size={40} round={true} /> </WhatsappShareButton></div>
            <div className="mx-1"><TumblrShareButton url={data[index].url} ><TumblrIcon size={40} round={true} /> </TumblrShareButton></div>
            <div className="mx-1"><PinterestShareButton url={data[index].url} ><PinterestIcon size={40} round={true} /> </PinterestShareButton></div>
            <div className="mx-1"><FacebookShareButton url={data[index].url} ><FacebookIcon size={40} round={true} /> </FacebookShareButton></div>
            <div className="mx-1"><TwitterShareButton url={data[index].url} ><TwitterIcon size={40} round={true} /> </TwitterShareButton></div>
            <div className="mx-1"><RedditShareButton url={data[index].url} ><RedditIcon size={40} round={true} /> </RedditShareButton></div>
            <div className="mx-1"><TelegramShareButton url={data[index].url} ><TelegramIcon size={40} round={true} /> </TelegramShareButton></div>
        </div>
    );
}

export default Share;