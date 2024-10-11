function Card({ item }) {
  return (
    <div>
      {item.map((val) => {
        <div key={val.id} className="w-40 bg-red-500">
          <h2 className="text-white">teste</h2>
          <div className="w-20">
            <img src={val.image} width={800} height={800} alt={val.alt} />
          </div>
          <div>
            <h2>{val.cardTitle}</h2>
          </div>
        </div>;
      })}
    </div>
  );
}

export default Card;
