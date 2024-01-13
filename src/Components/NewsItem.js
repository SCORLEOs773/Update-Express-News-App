import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsId } = this.props;
        return (
            <div>
                <div className="card my-2" style={{ width: "18rem", height: "27rem", border: "1.5px solid black" }}>
                    <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2022/03/IPO-770x433.jpg"} height={'182.5px'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title : "Title Not Available"}...</h5>
                        <p className="card-text">{description ? description : "Description Not Available"}...</p>
                        <a href={newsId} target="_blank" rel="noreferrer" className="btn btn-primary">Read Full News</a>
                    </div>
                </div>
            </div>
        )
    }
}
