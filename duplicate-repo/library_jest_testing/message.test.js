import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Message from "./message";

describe("Message component", () => {
  it("renders the initial message correctly", () => {
    render(<Message initialMessage="Welcome!" />);

    // Check initial message is shown
    expect(screen.getByTestId("message-text")).toHaveTextContent("Welcome!");
  });

  it("changes message when the button is clicked", async () => {
    render(<Message initialMessage="Welcome!" />);

    // Click button
    await userEvent.click(screen.getByRole("button", { name: /change message/i }));

    // Check the updated message
    expect(screen.getByTestId("message-text")).toHaveTextContent(
      "Hello from Focus Bear!"
    );
  });
});
