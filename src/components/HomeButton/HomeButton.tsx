import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function HomeButton() {
  const navigate = useNavigate();
  return (
    <Button variant="outline" color="blue" onClick={() => navigate("/")}>
      Home
    </Button>
  );
}
