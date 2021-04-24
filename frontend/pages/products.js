import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function ProductPage() {
  return (
    <div>
      <Pagination page={2} />
      <Products />
      <Pagination page={4} />
    </div>
  );
}
