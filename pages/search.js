import { useRouter } from 'next/dist/client/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { format } from 'date-fns';

function Search() {
  const router = useRouter();
  console.log(router.query);

  const { startDate, endDate, location, guestsNumber } = router.query;
  const formattedStartDate = format(new Date(startDate), 'MM/dd/yyyy');
  const formattedEndDate = format(new Date(endDate), 'MM/dd/yyyy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${guestsNumber} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-16">
          <p className="text-xs">
            300+ stays - {range} - for {guestsNumber} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place </p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;