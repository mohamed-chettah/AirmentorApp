export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("hello");

  if (!process.client) return;
  if (to.meta.requiresAuth) {
    const token = useCookie("auth_token").value;
    let user;

    // If the route requires authentication
    if (to.path.startsWith("/admin")) {
      // Check if the user is authenticated
      if (!token) {
        return navigateTo("/");
      }

      try {
        const response = await fetch("http://localhost:3001/auth/check", {
          method: "GET",
          credentials: "include", // This is important to include cookies
        });

        if (response.ok) {
          user = await response.json();
        } else {
          return navigateTo("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        return navigateTo("/");
      }

      // Check if the user has the admin role
      if (!user || !user.roles || !user.roles.includes("admin")) {
        return navigateTo("/");
      }
    }
  }
});
