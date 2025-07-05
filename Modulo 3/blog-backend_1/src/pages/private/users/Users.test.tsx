
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Users from "./Users";
import axiosInstance from "../../../api/axios"


jest.mock("../../../api/axios");
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

const mockUsers = {
  data: {
    data: {
      items: [
        { id: "1", username: "alice", email: "alice@example.com", password: "" },
        { id: "2", username: "bob", email: "bob@example.com", password: "" },
        { id: "3", username: "carol", email: "carol@example.com", password: "" },
      ],
    },
  },
};

describe("Users Component", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(mockUsers);
  });


  it("renders all users fetched from the API", async () => {
    render(<Users />);
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
      expect(screen.getByText("bob")).toBeInTheDocument();
      expect(screen.getByText("carol")).toBeInTheDocument();
    });
  });

  it("filters users by name (case-insensitive)", async () => {
    render(<Users />);
    await waitFor(() => screen.getByText("alice"));
    const searchInput = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(searchInput, { target: { value: "BOB" } });
    expect(screen.queryByText("alice")).not.toBeInTheDocument();
    expect(screen.getByText("bob")).toBeInTheDocument();
    expect(screen.queryByText("carol")).not.toBeInTheDocument();
  });

  it("shows the new user dialog when clicking 'Nuevo usuario'", async () => {
    render(<Users />);
    const button = screen.getByRole("button", { name: /nuevo usuario/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText(/guardar/i)).toBeInTheDocument();
    });
  });
});
