async function getWorkouts(page) {
  const res = await fetch(`https://api.example.com/artist/${page}`);
  return res.json();
}

export default async function Workouts() {
  return <div>Workouts</div>;
}
