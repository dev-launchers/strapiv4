import { test, expect } from '@playwright/test';
import { api } from './utils';
import * as config from '../init/config';

test.describe('/api/opportunities', () => {

    test("Get all opportunities", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities");

        // expect two opportunities to exists
        expect(opportunityData.length).toBe(2)

        const firstOpportunity = opportunityData[0].attributes;
        
        // expect opportunities have different fields filled
        expect(firstOpportunity.title).toBe(config.opportunity[0].title);
        expect(firstOpportunity.level).toBe(config.opportunity[0].level);
        expect(firstOpportunity.commitmentHoursPerWeek).toBe(config.opportunity[0].commitmentHoursPerWeek);
        expect(firstOpportunity.description).toBe(config.opportunity[0].description);
        expect(firstOpportunity.isHidden).toBe(config.opportunity[0].isHidden);
        expect(firstOpportunity.roleCategory).toBe(config.opportunity[0].roleCategory);
        expect(firstOpportunity.roleType).toBe(config.opportunity[0].roleType); 
        
        const secondOpportunity = opportunityData[1].attributes;
        expect(secondOpportunity.title).toBe(config.opportunity[1].title);
        expect(secondOpportunity.level).toBe(config.opportunity[1].level);
        expect(secondOpportunity.commitmentHoursPerWeek).toBe(config.opportunity[1].commitmentHoursPerWeek);
        expect(secondOpportunity.description).toBe(config.opportunity[1].description);
        expect(secondOpportunity.isHidden).toBe(config.opportunity[1].isHidden);
        expect(secondOpportunity.roleCategory).toBe(config.opportunity[1].roleCategory);
        expect(secondOpportunity.roleType).toBe(config.opportunity[1].roleType); 
    });
    test("Get opportunity by id", async ({ request }) => {
        const opportunityData = await api(request).getData("/api/opportunities/2");
        
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
    }); 
});