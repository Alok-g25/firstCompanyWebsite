import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E9D9FF] text-center px-6">
      <h1 className="text-6xl font-bold text-gray-800 ">404</h1>
      <p className="text-xl text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button
        className="mt-6 bg-purple-800 hover:bg-purple-600"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </div>
  );
}
