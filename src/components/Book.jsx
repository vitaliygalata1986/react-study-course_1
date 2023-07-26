const Book = ({ name, year, price }) => {
  /*
  if (!name) {
    // если name не пришел, то не отрисовываем компонент
    return null; // возвращаем ничего
  }
  */

  return (
    name && (
      <div>
        <h2>{name}</h2>
        <p>{year}</p>
        <p>{price}</p>
      </div>
    )
  );

  /*
  return name ? (
    <div>
      <h2>{name}</h2>
      <p>{year}</p>
      <p>{price}</p>
    </div>
  ) : null;
  */
};

export default Book;
