// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import { defineConfig } from 'cypress'
export default defineConfig(
    {
        e2e:
        {
            setupNodeEvents(on, config) {
            }
        }
    });
