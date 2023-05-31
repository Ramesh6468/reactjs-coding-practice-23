// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isTrue: true}

  componentDidMount() {
    this.GetBlogDetails()
  }

  GetBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response2 = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data2 = await response2.json()
    console.log(data2)
    const updatedData2 = {
      title: data2.title,
      imageUrl: data2.image_url,
      content: data2.content,
      avatarUrl: data2.avatar_url,
      author: data2.author,
    }
    this.setState({blogsData: updatedData2, isTrue: false})
  }

  render() {
    const {blogsData} = this.state
    const {isTrue} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogsData
    return (
      <div className="ItemCardContainer">
        {isTrue ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="card">
            <h1 className="title">{title}</h1>
            <div className="imgCard">
              <img src={avatarUrl} className="avatar" alt="avatar" />
              <p className="name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="image3" />
            <p className="para2">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
