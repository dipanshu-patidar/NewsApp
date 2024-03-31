import React,{Component} from 'react'

export default class NewsItem extends Component{
    render(){
        let {title,description,imageUrl,newsUrl} = this.props;
        return(
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2022/11/01/11/30/breaking-news-7562021_640.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}