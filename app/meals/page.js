import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals</h1>
      <Link href={"/meals/meals_1"}>Meal 1</Link>
    </div>
  );
}