import React from 'react';
import cn from 'classnames';
// core components
import ProductCard from 'components/ProductCard';
// styles
import styles from './ProductsView.module.scss';

class ProductsView extends React.Component {
    renderProductSection = (title, description, products, isLast = false) => {
        return (
            <div
                className={cn(styles.products_section, {
                    [styles.isLast]: isLast
                })}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.products}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={`product-item-${index}`}
                            product={product}
                            {...product.data}
                        />
                    ))}
                </div>
            </div>
        );
    };

    render() {
        const { recommended, otherConcern } = this.props;

        return (
            <div className={styles.root}>
                {this.renderProductSection(
                    'YOUR PERFECT SKINCARE ROUTINE',
                    'The following products are recommended to specifically address your primary and secondary skin concerns.',
                    recommended,
                    false
                )}
                {this.renderProductSection(
                    'OTHER AREAS OF CONCERN',
                    'We recommend the following products to specifically address stated areas of concern (including eyes, neck, hand, lips and body).',
                    otherConcern,
                    true
                )}
            </div>
        );
    }
}

export default ProductsView;