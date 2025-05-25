export default function Product(props) {
  const name = props.value?.name || props.name;
  const price = props.value?.price || props.price;

  return (
    <div>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}
 