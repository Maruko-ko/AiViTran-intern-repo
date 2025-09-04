import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./userList";
import axios from "axios";

jest.mock("axios");

describe("UserList component", () => {
  it("hiển thị user sau khi fetch API thành công", async () => {
    const mockUsers = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    axios.get.mockResolvedValue({ data: mockUsers });

    render(<UserList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
    });
  });

  it("handle API error", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    render(<UserList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Alice")).not.toBeInTheDocument();
    });
  });
});
