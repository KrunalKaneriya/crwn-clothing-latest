//This component can be said as the home route becuase this component displays every 4 products of every categories in ProductCard component in home route

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