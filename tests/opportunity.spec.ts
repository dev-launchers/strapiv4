import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

test.describe('/api/opportunities', () => {

    test("Get all opportunities", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities");

        // expect two opportunities to exists
        expect(opportunityData.length).toBe(2)

        const opportunity = opportunityData[0].attributes;
        
        // expect opportunities have different fields filled
        expect(opportunity.title).toBe(config.firstOpportunity.title);
        expect(opportunity.level).toBe(config.firstOpportunity.level);
        expect(opportunity.commitmentHoursPerWeek).toBe(config.firstOpportunity.commitmentHoursPerWeek);
        expect(opportunity.description).toBe(config.firstOpportunity.description);
        expect(opportunity.isHidden).toBe(config.firstOpportunity.isHidden);
        expect(opportunity.roleCategory).toBe(config.firstOpportunity.roleCategory);
        expect(opportunity.roleType).toBe(config.firstOpportunity.roleType); 
    });
    test("Get opportunity by id", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities/2");
        
        // expect to receive opportunity filtered by id 2
        expect(opportunityData.id).toBe(2);
        const opportunity = opportunityData.attributes;

        // expect opportunities have different fields filled
        expect(opportunity.title).toBe(config.secondOpportunity.title);
        expect(opportunity.level).toBe(config.secondOpportunity.level);
        expect(opportunity.commitmentHoursPerWeek).toBe(config.secondOpportunity.commitmentHoursPerWeek);
        expect(opportunity.description).toBe(config.secondOpportunity.description);
        expect(opportunity.isHidden).toBe(config.secondOpportunity.isHidden);
        expect(opportunity.roleCategory).toBe(config.secondOpportunity.roleCategory);
        expect(opportunity.roleType).toBe(config.secondOpportunity.roleType); 
    }); 
});