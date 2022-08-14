import { CategoryPreviewDetails, CategoryPreviewContainer, CategoryPreviewTitle } from "./category-preview.styles";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={title}><CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle></Link>
            </h2>

            <CategoryPreviewDetails>
                {
                    products.filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </CategoryPreviewDetails>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;