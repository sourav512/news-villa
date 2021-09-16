import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spinner from './Spinner'


export class News extends Component {
    static defaultProps ={
        country: '',
        category: 'general',

    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

  constructor() {
    super();
    this.state = {
        articles: [],
        loading: false,
    };
  }

  async componentDidMount(){
    console.log("CDM");
    let apiUrl = `https://newsapi.org/v2/top-headlines?language=en${this.props.country.lenth==0?"":"&country="+this.props.country}${"&category="+this.props.category}&apiKey=12ce795aa2234bf3813cb3abd8e157f1&pageSize=100`;
    this.setState({loading:true});
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState(
        {
            articles: parsedData.articles,
            loading:false
        })
  }

    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2 className="text-center">Top Headline{this.props.category!=='general'?' - '+this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1,20):''}</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div key={element.url} className="col-md-4">
                        <NewsItems title={element.title} description={element.description?element.description.slice(0,88):''} imgUrl={element.urlToImage?element.urlToImage:"https://static.india.com/wp-content/uploads/2016/04/breaking-news.jpg"} url={element.url}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
