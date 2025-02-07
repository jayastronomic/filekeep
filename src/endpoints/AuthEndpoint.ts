export default class AuthEndpoint {
  private static API = import.meta.env.VITE_BACKEND_URL + "/api/v1/auth";

  public static async login(payload: User): Promise<ApiResponse<string>> {
    const response = await fetch(AuthEndpoint.API + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  }

  public static async register(payload: User): Promise<ApiResponse<string>> {
    const response = await fetch(AuthEndpoint.API + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  }

  public static async isLoggedIn(): Promise<ApiResponse<User>> {
    const response = await fetch(AuthEndpoint.API + "/logged_in", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return await response.json();
  }
}
