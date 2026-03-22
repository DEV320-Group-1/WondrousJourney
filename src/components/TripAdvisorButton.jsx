// Button that opens the TripAdvisor page for a wonder
// Usage: <TripAdvisorButton item={wonder} />

export default function TripAdvisorButton({ item }) {

  function handleClick() {
    window.open(item.links?.trip_advisor, '_blank');
  }

  return (
    <button onClick={handleClick}>
      TripAdvisor
    </button>
  );
}