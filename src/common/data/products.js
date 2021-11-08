const products = [
    {
        url: 'https://www.amazon.com/gp/product/B08KQLMXFR?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Jan Marini Skin Care Management System',
                error: null
            },
            ASIN: {
                value: 'B08KQLMXFR',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/71LGgOV9QjL._SX466_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productOverview_feature_div table"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Product Dimensions :':
                        '10.3 x 2.1 x 7.9 inches; 1.68 Pounds',
                    'UPC :': '814924012014',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B08KQLMXFR',
                    'Best Sellers Rank:': '#173 in Bath & Shower Sets',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41l1aBTk4ML._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71LGgOV9QjL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41++VnE1C8L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/81X3uQGPcML._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/414M9GpjHGL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/81NwiSI5WbL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/415uW9cjGpL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71UUiE5Iu3L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41OuIHO1v4L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71+0Mflzb-L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/415dw-DjPBL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/716Jw2eagfL._SX466_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '121 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B004U5DNMI?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Age Intervention Duality I Acne and Anti-Aging Solution -1 oz.',
                error: null
            },
            ASIN: {
                value: 'B004U5DNMI',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/71-GTSB-6EL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productOverview_feature_div table"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Product Dimensions :': '10 x 0.1 x 10 inches; 0.99 Ounces',
                    'Item model number :': 'G11.1-ACN',
                    'UPC :':
                        '885239552151 885241990064 883286485064 885240876994 885240911947 814924011376 885145986149 885160815554 887867709648',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B004U5DNMI',
                    'Best Sellers Rank:': '#3,710 in Facial Serums',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/311bK8CQl0L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71-GTSB-6EL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41OtXg3cMrL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/81R5cIadfLL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41wpDETv45L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/81Ebnn7kwwL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31XqWtLDl-L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61qYK0htGML._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21bgCh7Cn7L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/41Ev-B3odgL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21L7LvTnYoL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21L7LvTnYoL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/51N6WQHAd+L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51N6WQHAd+L._SX466_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '106 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B010QROSR2?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Jan Marini Skin Research Marini Luminate Eye Gel, 0.5 fl. oz.',
                error: null
            },
            ASIN: {
                value: 'B010QROSR2',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/61L3Hkf+PaL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Item Form': 'Gel',
                    Brand: 'Jan Marini Skin Research',
                    'Specific Uses For Product':
                        'Apply sparingly to the lower lid and undereye area 1-2 times per day',
                    'Skin Type': 'Combination, Dry, Normal',
                    'Skin Tone': 'All'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Product Dimensions :':
                        '5.91 x 1.57 x 1.57 inches; 0.71 Ounces',
                    'Item model number :': 'C7.1-EYE',
                    'UPC :': '814924011833',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B010QROSR2',
                    'Best Sellers Rank:': '#90 in Eye Treatment Gels',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31+sBmKDZaL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61L3Hkf+PaL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21259nLTvoL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51l5Zuxw45L._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31L57CPYktL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61CkBhQbP-L._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31GX3lN4+0L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61q3BRCVllL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31Xp0IwTtLL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61UvXstp38L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/210uaNUUgxL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/210uaNUUgxL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31c15-GPK8L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71C27mhgAtL._SY679_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '63 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B000GX9A2K?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Transformation Eye Cream - 0.5 oz',
                error: null
            },
            ASIN: {
                value: 'B000GX9A2K',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/61VG8woui2L._SX466_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Special Ingredients': 'Hyaluronic Acid, Thymosin beta 4',
                    'Item Form': 'Cream',
                    Brand: 'Jan Marini Skin Research',
                    'Use for': 'Face',
                    'Specific Uses For Product':
                        'Apply sparingly morning and evening to lower eyelids and across brow bone.'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Product Dimensions :':
                        '5.91 x 1.57 x 1.57 inches; 0.71 Ounces',
                    'Item model number :': 'C7.2-EYE',
                    'UPC :': '127288150019 814924011284',
                    'Manufacturer :': 'Jan Marini',
                    'ASIN :': 'B000GX9A2K',
                    'Best Sellers Rank:': '#815 in Eye Treatment Creams',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41TVS7FjF1L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61VG8woui2L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41xv7DaDSnL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61T4wOCixUL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/51Zr6rD1DbL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71eYSo8FBML._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/4187jk1+VDL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61DA0pH4cOL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21eKvGx5iBL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/41Xr215l7gL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21Zsgj-3FGL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21Zsgj-3FGL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/51WynHJSTVL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71h+VFJp3SL._SX466_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '56 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B07DWVXT2G?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Marini CelluliTx Cream - 4 oz',
                error: null
            },
            ASIN: {
                value: 'B07DWVXT2G',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/61qUiS5q+TL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productOverview_feature_div table"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Product Dimensions :':
                        '1.88 x 1.88 x 6.5 inches; 4.8 Ounces',
                    'UPC :': '814924012359',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B07DWVXT2G',
                    'Best Sellers Rank:': '#3,145 in Bathing Accessories',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21-WuSDtPyL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61qUiS5q+TL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/2154iIXr5eL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61-z0R4y4nL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31vWxRrEuPL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/716xRTht-GL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31OXElXqyDL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71SnBfyRtnL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/219mxTKjYbL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61oqc-qtD6L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21JgoJ0rVeL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21JgoJ0rVeL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/212neB6qp8L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71xiWfPBWdL._SY679_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-3-5',
                    acrCustomerReviewText: '10 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B07KRCX6CH?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Marini ReNu Hand Complex - 1 oz',
                error: null
            },
            ASIN: {
                value: 'B07KRCX6CH',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/51a1WtQXu6L._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Item Form': 'Cream',
                    Brand: 'Jan Marini Skin Research',
                    'Use for': 'Hands',
                    'Specific Uses For Product':
                        'Apply sparingly morning and evening to the backs of each hand.',
                    'Skin Type': 'Combination'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Product Dimensions :':
                        '1.31 x 1.31 x 5 inches; 1.6 Ounces',
                    'UPC :': '814924012335',
                    'ASIN :': 'B07KRCX6CH',
                    'Best Sellers Rank:': '#1,076 in Hand Creams & Lotions',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/210l+J-6zjL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51a1WtQXu6L._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21NJ1kW-+JL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61BpiTACG8L._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31v43f-PSzL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/711K4tsNbbL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/212EKoVBzEL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61YELZweqVL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21RxrtG3L0L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/41QtA+-PHLL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21G+BPVGiaL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21G+BPVGiaL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21pOmhdg0uL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71MFT4v6LGL._SY679_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '8 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B00P2N1EB4?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Marini Juveneck Cream - 2 oz',
                error: null
            },
            ASIN: {
                value: 'B00P2N1EB4',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/71adUFHC3PL._SX466_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Special Ingredients': 'Hyaluronic Acid',
                    'Item Form': 'Mask',
                    Brand: 'Jan Marini Skin Research',
                    'Specific Uses For Product':
                        'Apply sparingly morning and evening to the e… See more',
                    'Skin Type': 'Combination, Normal'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Product Dimensions :':
                        '2.9 x 2.9 x 2.2 inches; 4.8 Ounces',
                    'Item model number :': 'J1402',
                    'UPC :': '787461515426 787461385340 814924010768',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B00P2N1EB4',
                    'Best Sellers Rank:': '#6,940 in Facial Treatments & Masks',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/416097sQHgL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71adUFHC3PL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/310FNUdnjxL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51USf4S04+L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41gS+FP-gKL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61h3nhvee-L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41l3snmD-JL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71CQOtTGuQL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21p6UrDfPNL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/41yVtnfgaAL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21L8+ImWtmL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21L8+ImWtmL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41AH0zY-dqL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61zyiBRIVfL._SX466_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4',
                    acrCustomerReviewText: '63 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B003GRP068?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Bioglycolic Resurfacing Body Scrub - 8 oz',
                error: null
            },
            ASIN: {
                value: 'B003GRP068',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/51Hp4iV+mkL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    Brand: 'Jan Marini Skin Research',
                    'Product Benefits':
                        'Excellent full body exfoliation for glowing skin. Great for legs, arms, backs of arms and body.',
                    'Item Weight': '200 Grams',
                    'Recommended Uses For Product':
                        'Smoother,Renew,Soothing,Exfoliator,Moisturizing,Calluses,Revitalize'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Product Dimensions :':
                        '5.91 x 1.57 x 1.57 inches; 7.05 Ounces',
                    'Item model number :': 'TSC-160',
                    'UPC :':
                        '720817010800 814924012281 814924010379 127295150033 727080022264 880942456697 094922768544 890495038806',
                    'Manufacturer :': 'Total Skin Care',
                    'ASIN :': 'B003GRP068',
                    'Best Sellers Rank:': '#336 in Body Scrubs',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21B-YQuB42L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51Hp4iV+mkL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31WCxERH1dL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61iwomUuP7L._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21uzb7EevOL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21uzb7EevOL.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '60 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B01BOM4KFS?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Marini Luminate Face Lotion 1 oz.',
                error: null
            },
            ASIN: {
                value: 'B01BOM4KFS',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/61s42VvEagL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Special Ingredients': 'Glycerin',
                    'Item Form': 'Lotion',
                    Brand: 'Jan Marini Skin Research',
                    'Specific Uses For Product':
                        'Apply sparingly every other evening for the f… See more',
                    'Skin Type': 'Combination, Dry, Normal'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Package Dimensions :':
                        '5.1 x 1.3 x 1.3 inches; 3.2 Ounces',
                    'UPC :': '814924011901',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B01BOM4KFS',
                    'Best Sellers Rank:': '#3,111 in Body Lotions',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31NsD1WKSkL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61s42VvEagL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41AssFrWs4L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/81+MIR9+CHL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41K7+J+YE+L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/81ABfRUwIXL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31DIHjFnVIL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61vXlOzxQAL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41uw+OoDosL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71p+w6bfJoL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21TQfWD1CHL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51vfPSMUfUL._SY679_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '67 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B005MJGUXU?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Age Intervention Retinol Plus I Retinol Cream- 1 oz',
                error: null
            },
            ASIN: {
                value: 'B005MJGUXU',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/5170UKKNPPL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Item Form': 'Cream',
                    Brand: 'Jan Marini Skin Research',
                    'Specific Uses For Product':
                        'Apply sparingly in the morning and evening to clean dry skin. S… See more',
                    'Skin Type': 'Combination, Dry, Normal',
                    'Item Weight': '0.1 Pounds'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Product Dimensions :':
                        '1.31 x 1.31 x 5 inches; 1.6 Ounces',
                    'Item model number :': 'A3.1-RES',
                    'Department :': 'YES',
                    'UPC :':
                        '811739259252 891726195091 701509364883 885420593550 814924011482 128241150015 885616813578 891723677231 885279938991 885318687941',
                    'Manufacturer :': 'Jan Marini',
                    'ASIN :': 'B005MJGUXU',
                    'Best Sellers Rank:': '#641 in Facial Serums',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31DfeRpaFvL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/5170UKKNPPL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/414Ynsog48L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/81vRDShSGCL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/41g+5FkFEOL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71wsvtiSnkL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31e2jLWGGNL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/517MnWitRoL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31PDaTWPJ6L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51Vr9+nd8YL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21rNs8suhhL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51SpWO26HgL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21J+8zuqPyL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21J+8zuqPyL.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '195 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B01J7Y5CBQ?th=1&psc=1',
        data: {
            productTitle: {
                value: 'RosaLieve Redness Reducing Complex 1 oz.',
                error: null
            },
            ASIN: {
                value: 'B01J7Y5CBQ',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/511NmWwA5ML._SX466_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    Brand: 'Jan Marini Skin Research',
                    'Specific Uses For Product':
                        'Add sparingly morning and evening to entire face.',
                    'Skin Type': 'Combination, Dry, Normal',
                    'Age Range (Description)': 'Adult',
                    'Skin Tone': 'All'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Product Dimensions :':
                        '1.31 x 1.31 x 5 inches; 3.2 Ounces',
                    'UPC :': '814924011949',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B01J7Y5CBQ',
                    'Best Sellers Rank:': '#883 in Facial Oils',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31yz69wUx+L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/511NmWwA5ML._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21R0yKDheYL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51QNi3MZuWL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/316uba5CAHL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71pVeM17MpL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31SptS2+6yL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61x4xhK+PgL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31qif8rGH8L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/41MfYZR7osL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21sazqcftCL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21sazqcftCL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21Zn63Q+NjL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61PoWgKZubL._SY679_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '25 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B01MYCMZ6P?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Jan Marini Skin Research Hyla3D HA Activating Complex',
                error: null
            },
            ASIN: {
                value: 'B01MYCMZ6P',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/616XRpB2urL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: '1 Fl Oz (Pack of 1)',
                error: null
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Special Ingredients': 'Hyaluronic Acid',
                    Brand: 'Jan Marini Skin Research',
                    'Specific Uses For Product':
                        'Shake well before using. Apply sparingly in the morning and evening over entire face and neck.',
                    'Skin Type': 'Acne prone',
                    'Age Range (Description)': 'Adult'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Product Dimensions :':
                        '1.31 x 1.31 x 5 inches; 3.2 Ounces',
                    'Item model number :': 'D8.1-ACC',
                    'UPC :': '814924011963',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B01MYCMZ6P',
                    'Best Sellers Rank:': '#2,839 in Face Moisturizers',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31nftdnEcML._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/616XRpB2urL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21EOzGunNyL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61GMVLpSY7L._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31FhW6x3q5L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71O9Ht1oa6L._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/318mq3gFbPL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61eiEZxx3uL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21uWIy+dbjL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/41j3Wmn2DEL._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21sA9pf+u1L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21sA9pf+u1L.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31PDV2okx8L._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61gIjgkCjeL._SY679_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-5',
                    acrCustomerReviewText: '33 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B001BBOGCK?th=1&psc=1',
        data: {
            productTitle: {
                value: 'C-ESTA Eye Repair I Vitamin C I Concentrate - 0.5 oz',
                error: null
            },
            ASIN: {
                value: 'B001BBOGCK',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/51EhWgf0zKL._SY679_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: {
                    'Special Ingredients': 'Glycerin, Shea Butter, Vitamin C',
                    'Item Form': 'Butter',
                    Brand: 'Jan Marini Skin Research',
                    'Use for': 'Eyes',
                    'Specific Uses For Product':
                        'Apply sparingly morning and evening to lower eyelids and across brow bone.'
                },
                error: null
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Is Discontinued By Manufacturer :': 'No',
                    'Product Dimensions :':
                        '5.91 x 1.57 x 1.57 inches; 0.71 Ounces',
                    'Item model number :': '2285199',
                    'UPC :': '814924010560 885407820303',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B001BBOGCK',
                    'Best Sellers Rank:': '#607 in Eye Treatment Creams',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31M8J-omtNL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51EhWgf0zKL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21hAQrT-YVL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51wlJejcIzL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/3145+lWwbjL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/617ZnenvZgL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31OMhkkxsoL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/51nnNbjhpNL._SY679_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/31coOuqoIeL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/41ZgypGY60L._SX466_.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/21PFn4UdnZL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/21PFn4UdnZL.jpg'
                    },
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/217UPH5ZvmL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/61iv9lKlQML._SY679_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4',
                    acrCustomerReviewText: '35 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B08KQKJYRG?th=1&psc=1',
        data: {
            productTitle: {
                value: 'Jan Marini Skin Care Management System',
                error: null
            },
            ASIN: {
                value: 'B08KQKJYRG',
                error: null
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: 'https://m.media-amazon.com/images/I/71h3IBMB4RL._SX466_.jpg',
                error: null
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productOverview_feature_div table"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: {
                    'Product Dimensions :':
                        '10.3 x 2.1 x 7.9 inches; 1.7 Pounds',
                    'UPC :': '814924012021',
                    'Manufacturer :': 'Jan Marini Skin Research',
                    'ASIN :': 'B08KQKJYRG',
                    'Best Sellers Rank:': '#173 in Bath & Shower Sets',
                    'Customer Reviews:': ''
                },
                error: null
            },
            images: {
                value: [
                    {
                        thumbnailSrc:
                            'https://m.media-amazon.com/images/I/419GMK+e-zL._SX38_SY50_CR,0,0,38,50_.jpg',
                        realImageSrc:
                            'https://m.media-amazon.com/images/I/71h3IBMB4RL._SX466_.jpg'
                    }
                ],
                error: null
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: {
                    rateStar: 'a-icon a-icon-star a-star-4-5',
                    acrCustomerReviewText: '121 ratings'
                },
                error: null
            }
        }
    },
    {
        url: 'https://www.amazon.com/gp/product/B000GX8A2K?th=1&psc=1',
        data: {
            productTitle: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="productTitle"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ASIN: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="ASIN"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            basePrice: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="priceblock_ourprice"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            mainImage: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#main-image-container img"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            sizeName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_size_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            styleName: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#variation_style_name .selection"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDescription: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productDescription > p"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productOverview: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#productOverview_feature_div table"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productAbout: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"#featurebullets_feature_div"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            productDetails: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="detailBullets_feature_div"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            images: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="imageBlock"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            priceDetail: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="price"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            },
            ratings: {
                value: null,
                error: 'no such element: Unable to locate element: {"method":"css selector","selector":"*[id="averageCustomerReviews"]"}\n  (Session info: headless chrome=96.0.4664.35)\n  (Driver info: chromedriver=96.0.4664.18 (b8887b3d1742adb0873f871edc1d8d8c1d46bb96-refs/branch-heads/4664@{#236}),platform=Mac OS X 12.0.1 x86_64)'
            }
        },
        error: 'Reference.child failed: First argument was an invalid path = "null". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
    }
];

export const defaultAsins = [
    'B008B9L6WS',
    'B07GVPCGJK',
    'B01B5D3VOC',
    'B00A8S6HM4',
    'B07L9RTWRS',
    'B08YQX3SKH',
    'B0073E7JFK',
    'B012FUZ8NG'
];
export default products;
