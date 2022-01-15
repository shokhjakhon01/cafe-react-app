export default function Category({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category, i) => {
        return (
          <button
            type="button"
            key={i}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
