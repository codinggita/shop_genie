import { validateEmail, validatePassword, validateName, validatePrice } from "../utils/validation";

describe("Validation Utils", () => {
  describe("validateEmail", () => {
    it("should return error for empty email", () => {
      expect(validateEmail("")).toBe("Email is required");
    });

    it("should return error for invalid email", () => {
      expect(validateEmail("invalid-email")).toBe("Please enter a valid email address");
    });

    it("should return empty string for valid email", () => {
      expect(validateEmail("test@example.com")).toBe("");
    });
  });

  describe("validatePassword", () => {
    it("should return error for empty password", () => {
      expect(validatePassword("")).toBe("Password is required");
    });

    it("should return error for short password", () => {
      expect(validatePassword("123")).toBe("Password must be at least 6 characters");
    });

    it("should return empty string for valid password", () => {
      expect(validatePassword("password123")).toBe("");
    });
  });

  describe("validateName", () => {
    it("should return error for empty name", () => {
      expect(validateName("")).toBe("Name is required");
    });

    it("should return error for short name", () => {
      expect(validateName("A")).toBe("Name must be at least 2 characters");
    });

    it("should return empty string for valid name", () => {
      expect(validateName("John Doe")).toBe("");
    });
  });

  describe("validatePrice", () => {
    it("should return error for empty price", () => {
      expect(validatePrice("")).toBe("Price is required");
    });

    it("should return error for invalid price", () => {
      expect(validatePrice("-5")).toBe("Please enter a valid price");
    });

    it("should return empty string for valid price", () => {
      expect(validatePrice("29.99")).toBe("");
    });
  });
});
