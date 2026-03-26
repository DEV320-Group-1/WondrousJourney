// Displays selected wonder in a simple card view

// prop takes in wonder data from Item.jsx, which gets it from ItemList.jsx, which gets it from WondersContext.jsx, which gets it from the API
// note: the prop is each wonder item, not the whole array of wonders



export default function ItemCard({ item }) {

  return (
    <div className="item-card">

      {/* IMAGE SECTION */}
      <img
        src={item.links?.images?.[0]}
        alt={item.name}
        className="item-card-image"
        style={{
              width: "100%",
              height: "550px",
              objectFit: "contain"
              }}
      />

      {/* CONTENT SECTION */}
      <div className="item-card-content">
        <h2>{item.name}</h2>
        <p><strong>Location:</strong> {item.location}</p>
        <p><strong>Time Period:</strong> {item.time_period}</p>
        <p><strong>Build Year:</strong> {item.build_year}</p>
        <p><strong>Categories:</strong> {item.categories?.join(', ')}</p>
        <p>{item.summary}</p>
      </div>

    </div>
  );
}