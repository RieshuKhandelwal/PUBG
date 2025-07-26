
import { useParams } from "react-router-dom";
export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Royal Pass Detail</h2>
      <p>Details for Royal Pass ID: {id}</p>
      {/* Add 3D animation or more info here */}
    </div>
  );
}