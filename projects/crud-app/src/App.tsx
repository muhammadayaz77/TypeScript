import ThemeToggle from "./ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Dark Mode Working 🌙</h1>
      <ThemeToggle />
    </div>
  );
}
