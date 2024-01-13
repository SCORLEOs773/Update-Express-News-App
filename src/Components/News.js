import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { PacmanLoader } from "react-spinners";

const newsCategories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      selectedCategory: "business",
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.fetchNews();
  }

  fetchNews = async () => {
    const { selectedCategory, page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=931f0215f42c418782ccff27a7eeacaf&page=${page}&pageSize=${this.props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    setTimeout(() => {
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }, 2000);
  };

  prevPage = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => this.fetchNews()
    );
  };

  nextPage = async () => {
    const { page, totalResults, selectedCategory } = this.state;
    if (page + 1 > Math.ceil(totalResults / this.props.pageSize)) {
      return;
    } else {
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        () => this.fetchNews()
      );
    }
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value }, () =>
      this.fetchNews()
    );
  };

  render() {
    return (
      <div className="container text-center my-3">
        <h2
          className="my-5"
          style={{ fontFamily: "Acme, sans-serif", fontSize: "3rem" }}
        >
          Update Express - Top Headlines
        </h2>

        <div className="my-3">
          <label htmlFor="category" className="form-label">
            Select News Category:
          </label>
          <select
            id="category"
            value={this.state.selectedCategory}
            onChange={this.handleCategoryChange}
            className="form-select text-center"
          >
            {newsCategories.map((category) => (
              <option key={category} value={category}>
                {category.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {this.state.loading ? (
          <div
            style={{
              minHeight: "40vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PacmanLoader color="#00FF00" size={35} />
          </div>
        ) : (
          <div>
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 50)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsId={element.url}
                    />
                  </div>
                );
              })}
            </div>

            <div className="container my-3">
              <nav aria-label="Page navigation example ">
                <ul className="pagination d-flex justify-content-between ">
                  <li className="page-item" role="button">
                    <a className="page-link" onClick={this.prevPage}>
                      &larr; Previous
                    </a>
                  </li>

                  <li className="page-item" role="button">
                    <a className="page-link" onClick={this.nextPage}>
                      Next &rarr;
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    );
  }
}
