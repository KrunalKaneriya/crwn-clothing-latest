import { CategoryPreviewDetails, CategoryPreviewContainer, CategoryPreviewTitle } from "./category-preview.styles";

import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
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