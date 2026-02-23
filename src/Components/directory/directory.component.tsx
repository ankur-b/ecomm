import CategoryItem  from "../category-item/category-item.component"
import './directory.styles.scss'
const Directory = ({categories}:Categories) =>{
    return (
        <div className="categories-container">
            {categories.map(category=>(
                <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl}/>
            ))}
        </div>
    )
}

type Categories = {
    categories:{id:number,title:string,imageUrl:string}[]
}

export default Directory