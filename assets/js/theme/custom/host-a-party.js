/* eslint-disable */
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PageManager from '../page-manager';
import { HostAPartyApp } from '../HostAPartyApp';
import { Container } from '../shared-components';
import { findAConsultant } from '../consultant/find-a-consultant/find-a-consultant';

export default class HostAParty extends PageManager {
    onReady() {
        findAConsultant();
        const container = document.querySelector('#root');
        const root = ReactDOM.createRoot(container);
        if (container) {
            root.render(
                <Container {...this.context}>
                    <HostAPartyApp />
                </Container >
            );
        }
    }
}
