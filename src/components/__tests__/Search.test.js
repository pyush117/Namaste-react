import { fireEvent, render, screen, act } from "@testing-library/react";
import Body from "../Body";
import Mock_DATA from "../mocks/mockResListData.json";
// import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_DATA),
  })
);
it("should search ResLst for Pizza Hut text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch=screen.queryAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.queryByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Pizza Hut" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch =  screen.queryAllByTestId("resCard");
  console.log(cardsAfterSearch);
  expect(cardsAfterSearch.length).toBe(1);
  //  expect(searchBtn).toBeInTheDocument(searchBtn);
});
