// src/pages/Home.tsx
import Button from "../components/ui/Button";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-primary mb-4">Bienvenido a SmartSYS</h1>
      <Button variant="primary" onClick={() => alert("Hola!")}>
        Clic aquí
      </Button>
    </div>
  );
}