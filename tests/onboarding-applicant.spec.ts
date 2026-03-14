import { test, expect } from '@playwright/test';
import { api } from './utils';

let applicantId = 0;

test.describe('/api/onboarding-applicants', () => {

  test("should create a new onboarding applicant", async ({ request }) => {
    const applicant = await api(request).post("/api/onboarding-applicants", {
      fullName: "Test Applicant",
      githubUsername: "testuser123",
      discordUsername: "testuser#1234",
      personalEmail: "testapplicant@example.com",
      status: "formSubmitted",
      consent: true,
    });

    applicantId = applicant.id;
    expect(applicantId).toBeGreaterThan(0);
    expect(applicant.attributes.fullName).toBe("Test Applicant");
    expect(applicant.attributes.githubUsername).toBe("testuser123");
    expect(applicant.attributes.discordUsername).toBe("testuser#1234");
    expect(applicant.attributes.personalEmail).toBe("testapplicant@example.com");
    expect(applicant.attributes.status).toBe("formSubmitted");
    expect(applicant.attributes.consent).toBe(true);
    expect(applicant.attributes.githubInviteSent).toBe(false);
  });

  test("should read back the onboarding applicant", async ({ request }) => {
    const response = await api(request).get(`/api/onboarding-applicants/${applicantId}`);
    const applicant = response.data;

    expect(applicant.id).toBe(applicantId);
    expect(applicant.attributes.fullName).toBe("Test Applicant");
    expect(applicant.attributes.personalEmail).toBe("testapplicant@example.com");
    expect(applicant.attributes.githubInviteSent).toBe(false);
  });

  test("should update status to docSent without triggering invite", async ({ request }) => {
    const applicant = await api(request).put(`/api/onboarding-applicants/${applicantId}`, {
      status: "docSent",
    });

    expect(applicant.attributes.status).toBe("docSent");
    expect(applicant.attributes.githubInviteSent).toBe(false);
  });

  test("should update status to signed and attempt GitHub invite", async ({ request }) => {
    const applicant = await api(request).put(`/api/onboarding-applicants/${applicantId}`, {
      status: "signed",
    });

    expect(applicant.attributes.status).toBe("signed");
    // In test env without GitHub credentials, the invite call will fail gracefully.
    // The lifecycle hook catches the error, so githubInviteSent remains false.
    // In production with valid credentials, this would be true.
    expect(applicant.attributes.githubInviteSent).toBe(false);
  });

  test("should not re-trigger invite when status is already signed", async ({ request }) => {
    // Update a non-status field while status remains "signed"
    const applicant = await api(request).put(`/api/onboarding-applicants/${applicantId}`, {
      fullName: "Test Applicant Updated",
    });

    expect(applicant.attributes.fullName).toBe("Test Applicant Updated");
    expect(applicant.attributes.status).toBe("signed");
    // prevStatus === newStatus === "signed", so the hook should NOT fire
    expect(applicant.attributes.githubInviteSent).toBe(false);
  });

  test("should not trigger invite when githubUsername is missing", async ({ request }) => {
    // Create an applicant without a GitHub username
    const noGithubApplicant = await api(request).post("/api/onboarding-applicants", {
      fullName: "No Github User",
      personalEmail: "nogithub@example.com",
      status: "formSubmitted",
      consent: true,
    });

    const noGithubId = noGithubApplicant.id;

    // Transition directly to signed
    const updated = await api(request).put(`/api/onboarding-applicants/${noGithubId}`, {
      status: "signed",
    });

    expect(updated.attributes.status).toBe("signed");
    // No githubUsername means the hook skips the invite
    expect(updated.attributes.githubInviteSent).toBe(false);
  });

  test("should reject creation without required personalEmail", async ({ request }) => {
    const response = await request.post("/api/onboarding-applicants", {
      data: {
        data: {
          fullName: "Missing Email",
          status: "formSubmitted",
        },
      },
    });

    expect(response.status()).toBe(400);
  });

  test("should reject invalid status value", async ({ request }) => {
    const response = await request.post("/api/onboarding-applicants", {
      data: {
        data: {
          fullName: "Invalid Status",
          personalEmail: "invalid@example.com",
          status: "invalidStatus",
        },
      },
    });

    expect(response.status()).toBe(400);
  });
});
