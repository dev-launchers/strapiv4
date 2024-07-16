import { test, expect, request } from '@playwright/test';
import { api, strapiConnect } from './utils';
import * as config from '../init/config';

test.describe('/api/project', () => {

    test("Get dev-recruiting project", async ({ request }) => {
        const projectData = await api(request).getData("/api/projects/dev-recruiting");
        const project = projectData.attributes;
        expect(project.slug).toBe(config.project.slug);
        expect(project.catchPhase).toBe(config.project.catchPhase);
        expect(project.vision).toBe(config.project.vision);
        expect(project.description).toBe(config.project.description);
        expect(project.commitmentLevel).toBe(config.project.commitmentLevel);
        expect(project.signupFormUrl).toBe(config.project.signupFormUrl);
        expect(project.isListed).toBe(config.project.isListed);
        
        const team = project.team;
        const members = team.members;
        const leaders = team.leaders;
        
        expect(members.length).toBe(1);
        const member = members[0];
        expect(member.username).toBe(config.user.username);
        expect(member.role).toBe("Developer");
        
        expect(leaders.length).toBe(1);
        const leader = leaders[0];
        expect(leader.username).toBe(config.user.username);
        expect(leader.role).toBe("Project Manager");
        
        expect(project.interests.data.length).toBe(1);
        expect(project.interests.data[0].attributes.interest).toBe(config.interests[0]);
    });

    test("Get project when team is not attached to the project", async({request}) => {
        
        const projectData = await api(request).getData("/api/projects/dev-launchers-platform");
        const project = projectData.attributes;
        expect(project.slug).toBe(config.projectWithoutTeam.slug);
        expect(project.team).toBe(null);
    })
});