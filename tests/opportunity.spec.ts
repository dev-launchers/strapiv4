import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

test.describe('/api/opportunities', () => {

    test("Get all opportunities", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities");

        // expect atleast one opportunity exists
        expect(opportunityData.length).not.toBe(0)

        const opportunities = opportunityData[0].attributes;
        
        // expect opportunities have different fields filled
        expect(opportunities.title).toBe(config.opportunityTitles[0]);
        expect(opportunities.level).toBe(config.opportunity.level);
        expect(opportunities.commitmentHoursPerWeek).toBe(config.opportunity.commitmentHoursPerWeek);
        expect(opportunities.description).toBe(config.opportunity.description);
        expect(opportunities.isHidden).toBe(config.opportunity.isHidden);
        expect(opportunities.roleCategory).toBe(config.opportunity.roleCategory);
        expect(opportunities.roleType).toBe(config.opportunity.roleType); 
    });
    test("Get opportunity by id", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities/1");
        
        // expect to receive opportunity filtered by id 1
        expect(opportunityData.id).toBe(1);
        
        const opportunities = opportunityData.attributes;

        // expect opportunities have different fields filled
        expect(opportunities.title).toBe(config.opportunityTitles[0]);
        expect(opportunities.level).toBe(config.opportunity.level);
        expect(opportunities.commitmentHoursPerWeek).toBe(config.opportunity.commitmentHoursPerWeek);
        expect(opportunities.description).toBe(config.opportunity.description);
        expect(opportunities.isHidden).toBe(config.opportunity.isHidden);
        expect(opportunities.roleCategory).toBe(config.opportunity.roleCategory);
        expect(opportunities.roleType).toBe(config.opportunity.roleType); 
    }); 
});