export default async function Home() {
  let message = "Default message";

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/route`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    message = data.message || "Default message";
  } catch (error) {
    console.error("Error fetching data:", error);
    message = "Failed to load message";
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">{message}</p>
      </div>
    </main>
  );
}
