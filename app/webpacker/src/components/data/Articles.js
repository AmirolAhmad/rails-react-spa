import React from 'react'
import axios from 'axios';
import Article from './Article';

class Articles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    axios.get('api/v1/articles')
    .then(response => {
      console.log(response)
      this.setState({
        articles: response.data
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="articles-container">
        {this.state.articles.map( article => {
          return (<Article article={article} key={article.id} />)
        })}
      </div>
    )
  }
}

export default Articles