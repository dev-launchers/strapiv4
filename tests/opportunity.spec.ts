import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

test.describe('/api/opportunities', () => {

    test("Get all opportunities", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities?populate=role");

        // expect two opportunities to exists
        expect(opportunityData.length).toBe(2)

        for (let i = 0; i < 2; i++) {
            const opportunity = opportunityData[i].attributes;

            // expect opportunities have different fields filled
            expect(opportunity.title).toBe(config.opportunity[i].title);
            expect(opportunity.level).toBe(config.opportunity[i].level);
            expect(opportunity.commitmentHoursPerWeek).toBe(config.opportunity[i].commitmentHoursPerWeek);
            expect(opportunity.description).toBe(config.opportunity[i].description);
            expect(opportunity.isHidden).toBe(config.opportunity[i].isHidden);
            expect(opportunity.roleCategory).toBe(config.opportunity[i].roleCategory);
            expect(opportunity.roleType).toBe(config.opportunity[i].roleType);
            expect(opportunity.role.name).toBe(config.opportunity[i].role.name);
            expect(opportunity.role.category).toBe(config.opportunity[i].role.category);
        }
    });
    test("Get opportunity by id", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities/2?populate=role");

        // expect to receive opportunity filtered by id 2
        expect(opportunityData.id).toBe(2);
        const opportunity = opportunityData.attributes;

        // expect opportunities have different fields filled
        expect(opportunity.title).toBe(config.opportunity[1].title);
        expect(opportunity.level).toBe(config.opportunity[1].level);
        expect(opportunity.commitmentHoursPerWeek).toBe(config.opportunity[1].commitmentHoursPerWeek);
        expect(opportunity.description).toBe(config.opportunity[1].description);
        expect(opportunity.isHidden).toBe(config.opportunity[1].isHidden);
        expect(opportunity.roleCategory).toBe(config.opportunity[1].roleCategory);
        expect(opportunity.roleType).toBe(config.opportunity[1].roleType);
        expect(opportunity.role.name).toBe(config.opportunity[1].role.name);
        expect(opportunity.role.category).toBe(config.opportunity[1].role.category);
    });
});