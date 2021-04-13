describe("Display list of employees", () => {
  before(() => {
    cy.visit("/");
  });

  it("displays a header", () => {
    cy.get("#header").should("contain", "Employee List");
  });
  it("display a list with 12 items", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").should("have.length", 12);
    });
  });
  it("the list items display the expected content", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item")
        .first()
        .find(".name")
        .should("contain", "George Bluth");
    });
  });

  it("the list items display an image", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").first().find(".avatar").should("be.visible");
    });
  });
});
