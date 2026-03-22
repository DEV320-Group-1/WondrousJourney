// Button that opens the Britannica page for a wonder
// Usage: <BritannicaButton item={wonder} />

export default function BritannicaButton({ item }) {

  function handleClick() {
    window.open(item.links?.britannica, '_blank');
  }

  return (
    <button onClick={handleClick}>
      Britannica
    </button>
  );
}