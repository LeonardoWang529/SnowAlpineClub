import React from "react";
import {
    FacebookShareCount,
    OKShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
} from "react-share";

import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

class PostInforComponent extends React.Component{

    render() {
        return (
            <div className="product__info__main">
                <h1>{this.props.post.postTitle}</h1>
                <div className="price-box">
                    <span>$ {this.props.post.price}</span>
                </div>
                <div className="product__overview">
                    <p>{this.props.post.postContent}</p>
                </div>


                <div className="product_meta">
                    <p>Categories: {this.props.post.postCategories}</p>
                </div>
                <div className="product-share">
                    <FacebookShareButton
                        url={"www.facebook.com"}
                        quote={"facebook"}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon style={{margin: "5"}} size={32} round />
                    </FacebookShareButton>

                    <EmailShareButton
                        url={"www.facebook.com"}
                        quote={"facebook"}
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon style={{margin: "5"}} size={32} round />
                    </EmailShareButton>

                    <PinterestShareButton
                        url={"www.facebook.com"}
                        quote={"facebook"}
                        className="Demo__some-network__share-button"
                    >
                        <PinterestIcon style={{margin: "5"}} size={32} round />
                    </PinterestShareButton>

                    <EmailShareButton
                        url={"www.facebook.com"}
                        quote={"facebook"}
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon style={{margin: "5"}} size={32} round />
                    </EmailShareButton>
                </div>

            </div>
        )
    }

}

export default PostInforComponent;