import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("sHOULD render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //const loginButton=screen.getByRole("button"); good practice to find by role
  const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("sHOULD render Header Component with Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const cartItems = screen.getByText("Cart (0 items)");
  const cartItems = screen.getByText(/Cart/); // using regX
  expect(cartItems).toBeInTheDocument();
});
it("sHOULD chnage login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
