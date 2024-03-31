import React,{Component} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component{
    static default = {
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=379fbd27d9ee4adcb31cd0b2491cbba4&page=1&pageSize=10`
      this.setState({
        loading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      })
    }
    handleToPrev = async() => {
        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=379fbd27d9ee4adcb31cd0b2491cbba4&page=${this.state.page-1}&pageSize=10`
        this.setState({
            loading: true
          })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleToNext = async() => {
            let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=379fbd27d9ee4adcb31cd0b2491cbba4&page=${this.state.page+1}&pageSize=10`
            this.setState({
                loading: true
              })
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            }) 
    }
    render(){
        return(
            <div className='container my-3'>
               <h2 className='d-flex justify-content-center' style={{margin :"30px"}}>NewsApp - Top HeadLines</h2>
               {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                    </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleToPrev}>&laquo; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/10)} type="button" className="btn btn-dark" onClick={this.handleToNext}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}