import products from 'common/data/products';

class Question {
    questions = [
        // {
        //     showFaceImage: true,
        //     label: 'Answer a short series of questions to help you identify your skin concerns and create your personalized Perfect Skincare Routine!',
        //     answers: [{ id: 'take_quiz', label: 'Take the Quiz' }]
        // },
        {
            showBg: true,
            label: 'If there was something you could change or improve about your skin, what would it be? Pick one',
            answers: [
                { id: 'line_wrinkles', label: 'Lines/Wrinkles' },
                { id: 'hyperpigmentation', label: 'Hyperpigmentation' },
                { id: 'acne', label: 'Acne' },
                { id: 'volume_laxity', label: 'Volume/Laxity' },
                { id: 'redness', label: 'Redness' }
            ]
        },
        {
            showBg: true,
            label: 'What else would you change or improve about your skin?',
            answers: [
                { id: 'line_wrinkles', label: 'Lines/Wrinkles' },
                { id: 'hyperpigmentation', label: 'Hyperpigmentation' },
                { id: 'acne', label: 'Acne' },
                { id: 'volume_laxity', label: 'Volume/Laxity' },
                { id: 'redness', label: 'Redness' }
            ],
            isMulti: true,
            fn: (answers, currentAnswers) => {
                return answers.filter(
                    (answer) => answer.id !== currentAnswers[0]
                );
            }
        },
        {
            showBg: true,
            label: 'Would you call your skin:',
            answers: [
                { id: 'dry', label: 'Dry/Very Dry Everywhere' },
                { id: 'normal', label: 'Normal/Combination' },
                { id: 'oily', label: 'Very Oily Everywhere' }
            ]
        },
        {
            showBg: true,
            isMulti: true,
            label: 'What other parts of the body are you interested in? Select all that apply:',
            answers: [
                { id: 'eyes', label: 'Eyes' },
                { id: 'cellulite', label: 'Cellulite' },
                { id: 'hands', label: 'Hands' },
                { id: 'neck', label: 'Neck' },
                { id: 'body', label: 'Body' }
            ]
        },
        {
            showBg: true,
            label: 'Do you prefer your sunscreen to be:',
            answers: [
                { id: 'matte', label: 'Matte, Universal Tint' },
                { id: 'transparent', label: 'Transparent, Weightless' }
            ]
        }
    ];

    productsMap = {
        line_wrinkles: {
            dry: {
                recommended: ['B08KQKJYRG', 'B005MJGUXU'],
                eyes: ['B010QROSR2', 'B005MJGUXU'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            normal: {
                recommended: ['B08KQLMXFR', 'B005MJGUXU'],
                eyes: ['B010QROSR2', 'B005MJGUXU'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            oily: {
                recommended: ['B08KQLMXFR', 'B005MJGUXU'],
                eyes: ['B010QROSR2', 'B005MJGUXU'],
                cellulite: ['B07DWVXT2G'],
                hand: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            }
        },
        hyperpigmentation: {
            dry: {
                recommended: ['B08KQKJYRG', 'B01BOM4KFS'],
                eyes: ['B010QROSR2'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            normal: {
                recommended: ['B08KQLMXFR', 'B01BOM4KFS'],
                eyes: ['B010QROSR2'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            oily: {
                recommended: ['B08KQLMXFR', 'B01BOM4KFS'],
                eyes: ['B010QROSR2'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            }
        },
        acne: {
            dry: {
                recommended: ['B08KQKJYRG', 'B004U5DNMI'],
                eyes: ['B010QROSR2', 'B000GX9A2K'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            normal: {
                recommended: ['B08KQLMXFR', 'B004U5DNMI'],
                eyes: ['B010QROSR2', 'B000GX9A2K'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            oily: {
                recommended: ['B8KQLMXFR', 'B004U5DNMI'],
                eyes: ['B010QROSR2', 'B000GX9A2K'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            }
        },
        volume_laxity: {
            dry: {
                recommended: ['B08KQKJYRG', 'B01MYCMZ6P'],
                eyes: ['B010QROSR2', 'B001BBOGCK'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            normal: {
                recommended: ['B08KQLMXFR', 'B01MYCMZ6P'],
                eyes: ['B010QROSR2', 'B001BBOGCK'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            oily: {
                recommended: ['B08KQLMXFR', 'B01MYCMZ6P'],
                eyes: ['B010QROSR2', 'B001BBOGCK'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            }
        },
        redness: {
            dry: {
                recommended: ['B08KQKJYRG', 'B01J7Y5CBQ'],
                eyes: ['B010QROSR2', 'B000GX9A2K'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            normal: {
                recommended: ['B08KQLMXFR', 'B01J7Y5CBQ'],
                eyes: ['B010QROSR2', 'B000GX9A2K'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            },
            oily: {
                recommended: ['B08KQLMXFR', 'B01J7Y5CBQ'],
                eyes: ['B010QROSR2', 'B000GX9A2K'],
                cellulite: ['B07DWVXT2G'],
                hands: ['B07KRCX6CH'],
                neck: ['B00P2N1EB4'],
                body: ['B003GRP068']
            }
        }
    };

    products = products;

    getAllQuestions = () => {
        return this.questions;
    };

    getQuestionForStep = (step) => {
        return this.questions[step];
    };

    getQuestionsLength = () => {
        return this.questions.length;
    }

    /**
     * @return Array of Product Asins
     * @param {*} answer array of question answer path
     */
    getProductsForAnswer = (answer) => {
        console.log('getProductsForAnswer', answer)
        let _productAsins = this.productsMap;

        answer.forEach((item) => {
            _productAsins = _productAsins[item];
        });

        return products.filter((product) =>
            _productAsins.includes(product.data.ASIN.value)
        );
    };
}

export default new Question();
