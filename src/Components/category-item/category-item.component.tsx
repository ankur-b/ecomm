import './category-item.styles.scss'

const CategoryItem = ({title,imageUrl}:Category) =>{
    return (
        <div className="category-container">
            <div className="background-image" style={{
              backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    )
}

export type Category  = {
    key : number
    title : String
    imageUrl : String
}

export default CategoryItem