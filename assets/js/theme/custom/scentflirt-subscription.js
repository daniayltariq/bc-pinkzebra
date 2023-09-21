/* eslint-disable */

import PageManager from '../page-manager';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ScentflirtApp } from '../ScentflirtApp';
import { Container } from '../shared-components';
import { getData } from '../../api-helper';

export default class Scentflirt extends PageManager {
    async onReady() {
        const products = await getProductsFromAWS(this.context, this.context.scentflirtProductIds);
        this.context.productsAWS = products || [];
        const container = document.querySelector('#root');
        const root = ReactDOM.createRoot(container);
        if (container) {
            root.render(<Container {...this.context}>
                <ScentflirtApp />
            </Container>);
        }
    }
}


const getProductsFromAWS = async (context, ids) => {
    const { aws_url } = context;
    const aws = `${aws_url}bc/products/get?ids=${ids.replace(/^\[|\]$/g, '')}`;
    const response = await getData(aws);
    return response;
};
