import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar, { INavigationBarProps, ILink } from "./Navbar";

const mockLinks: ILink[] = [
  { id: "1", url: "/", label: "Home", active: true },
  { id: "2", url: "/about", label: "About" },
  { id: "3", url: "/contact", label: "Contact" },
];

test("Navbar renders correctly with links and login option", () => {
  const props: INavigationBarProps = {
    links: mockLinks,
    isLoggedIn: false,
  };

  render(<Navbar {...props} />);

  // Verify that the links are rendered
  const linkElements = screen.getAllByRole("link");
  expect(linkElements).toHaveLength(mockLinks.length + 1);

  // Verify that the active link has the correct class
  const activeLink = screen.getByText("Home");
  expect(activeLink).toHaveClass("active");

  // Verify that the login option is rendered
  const loginElement = screen.getByText("Login");
  expect(loginElement).toBeInTheDocument();
});

test("Navbar toggles menu when hamburger menu is clicked", () => {
  const props: INavigationBarProps = {
    links: mockLinks,
    isLoggedIn: false,
  };

  render(<Navbar {...props} />);

  // Verify that menu is initially closed
  const navList = screen.getByRole("list");
  expect(navList).not.toHaveClass("open");

  // Simulate clicking on the hamburger menu
  const hamburgerMenu = screen.getByRole("button");
  fireEvent.click(hamburgerMenu);

  // Verify that menu is now open
  expect(navList).toHaveClass("open");

  // Simulate clicking on the hamburger menu again
  fireEvent.click(hamburgerMenu);

  // Verify that menu is closed again
  expect(navList).not.toHaveClass("open");
});
