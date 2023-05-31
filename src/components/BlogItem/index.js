import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li className="itemContainer">
      <Link to={`/blogs/${id}`} className="link">
        <div className="ItemCard">
          <img src={imageUrl} alt={`image1${id}`} className="image1" />
          <div className="detailsCard">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="imgContainer">
              <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
              <p className="para">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
