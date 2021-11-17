import React from 'react';
import cn from 'classnames';
// core components
import Button from 'components/Button/Button';
import ProductCard from 'components/ProductCard';
// material ui components
import Container from '@material-ui/core/Container';
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
        const { recommended, otherConcern, retakeQuiz } = this.props;

        return (
            <Container>
                <div className={styles.root}>
                    {this.renderProductSection(
                        'Skin Care Formulated For Your Needs',
                        'The following products are recommended to specifically address your primary and secondary skin concerns.',
                        recommended,
                        false
                    )}

                    <Button
                        onClick={retakeQuiz}
                        gray
                        icon={
                            <img
                                src="https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/skin-care-aws-page@1.0.4/src/assets/images/retake.png"
                                alt="retake"
                                width={15}
                            />
                        }>
                        Retake Quiz
                    </Button>

                    <hr />

                    {this.renderProductSection(
                        'OTHER AREAS OF CONCERN',
                        'We recommend the following products to specifically address the eyes, neck, hands, lips and body.',
                        otherConcern,
                        true
                    )}
                </div>
            </Container>
        );
    }
}

export default ProductsView;
