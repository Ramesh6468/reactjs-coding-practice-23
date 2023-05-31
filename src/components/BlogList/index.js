// Write your JS code here\
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList1: [], isTrue: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    console.log(updatedData)
    this.setState({blogList1: updatedData, isTrue: false})
  }

  render() {
    const {blogList1} = this.state
    const {isTrue} = this.state
    return (
      <div className="blogContainer">
        {isTrue ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          blogList1.map(each => (
            <BlogItem key={each.id} blogItemDetails={each} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
