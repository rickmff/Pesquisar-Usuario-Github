describe("Query for user", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("Visits the page", () => {
		const input = cy.get("#username");

		expect(input).to.exist;
	});

	it("Finds the user", () => {
		const input = cy.get("#username");
		const userQueried = "rickmff";

		input.type(userQueried);

		cy.get("form").submit();

		const userListEl = cy.get('[data-testid="user-list"]');

		expect(userListEl).to.exist;

		userListEl.children().should("have.length.above", 0);
	});

	it("Views the user's profile", () => {
		const input = cy.get("#username");
		const userQueried = "rickmff";
		input.type(userQueried);

		cy.get("form").submit();
		cy.get('[data-testid="user-list"]')
			.children()
			.contains(userQueried)
			.click();

		expect(cy.get('[role="dialog"]')).to.exist;
		expect(cy.get("img")).to.exist;
		expect(cy.get('[role="dialog"]').contains(`@${userQueried}`)).to.exist;

		expect(cy.get('[role="dialog"]').contains(`Repos`)).to.exist;
		cy.get('[role="dialog"]')
			.contains(`Repos`)
			.siblings()
			.should("not.be.NaN");

		expect(cy.get('[role="dialog"]').contains(`Following`)).to.exist;
		cy.get('[role="dialog"]')
			.contains(`Following`)
			.siblings()
			.should("not.be.NaN");

		expect(cy.get('[role="dialog"]').contains(`Followers`)).to.exist;
		cy.get('[role="dialog"]')
			.contains(`Followers`)
			.siblings()
			.should("not.be.NaN");

		expect(cy.get('[role="dialog"]').get('[aria-label="close modal"]')).to
			.exist;
		cy.get('[role="dialog"]').get('[aria-label="close modal"]').click();

		cy.get('[role="dialog"]').should("not.exist");
	});
});

export {};
