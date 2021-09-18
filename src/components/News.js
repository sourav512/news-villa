import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResult: 0
    };
    document.title = `News Villa - ${
      props.category.charAt(0).toUpperCase() + props.category.slice(1, 10)
    }`;
  }

  async updateNews(props) {
      this.props.setProgress(10);
      let apiUrl = `https://newsapi.org/v2/top-headlines?language=en${this.props.country.lenth === 0 ? "" : "&country=" + this.props.country}${"&category=" + this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;
      this.setState({ loading: true });
      let data = await fetch(apiUrl);
      this.props.setProgress(30);
      let parsedData = await data.json();
      console.log(parsedData);
      this.props.setProgress(70);
      this.setState({
          articles: parsedData.articles,
          totalResult: parsedData.totalResults,
          loading: false,
        });
        this.props.setProgress(100);
    }
    
    async componentDidMount() {
        console.log("CDM");
    this.updateNews();
}
fetchMoreData = async () => {
  let apiUrl = `https://newsapi.org/v2/top-headlines?language=en${this.props.country.lenth === 0 ? "" : "&country=" + this.props.country}${"&category=" + this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=12`;
    this.setState({page:this.state.page +1})
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResult: parsedData.totalResults,
    });
};

render() {
    console.log("render");
    return (
        <div className="container my-3">
        <h2 className="text-center">
          Top Headline
          {this.props.category !== "general"? " - " +this.props.category.charAt(0).toUpperCase() +this.props.category.slice(1, 20): ""}
        </h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
        style={{overflow:"hidden"}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={<Spinner />}
        >
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItems
                  title={element.title}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://static.india.com/wp-content/uploads/2016/04/breaking-news.jpg"
                  }
                  url={element.url}
                  author={element.author}
                  source={element.source}
                  date={new Date(element.publishedAt)}
                />
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
