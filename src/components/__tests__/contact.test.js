import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";
describe("contact us page test cases", () => {
  beforeAll(()=>{
    console.log("Before All");
  })
  beforeEach(()=>{
    console.log("Before Each");
  })
    afterAll(()=>{
    console.log("After All");
  })
    afterEach(()=>{
    console.log("after Each");
  })
    //it and test is same
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
