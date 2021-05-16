import UpdateProduct from '../components/UpdateProduct';
import PleaseSignIn from '../components/PleaseSignIn';

export default function UpdatePage({ query }) {
  console.log(query);
  return (
    <div>
      <PleaseSignIn>
        <UpdateProduct id={query.id} />
      </PleaseSignIn>
    </div>
  );
}
