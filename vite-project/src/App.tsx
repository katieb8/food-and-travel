import type { ReactNode } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Text title="Hi there!" subtitle="Welcome to our new site" />
    </>
  );
}

function Text({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
export default App;
