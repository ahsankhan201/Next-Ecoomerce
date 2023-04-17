import { render } from '@testing-library/react';
import SearchNav from '../components/navBar/SearchNav';
import '@testing-library/jest-dom/extend-expect';

describe('SearchNav component', () => {
  test('renders the search input', () => {
    const { getByPlaceholderText } = render(
      <SearchNav searchText="Search for shoes" />
    );
    const searchInput = getByPlaceholderText('Search for shoes');
    expect(searchInput).toBeInTheDocument();
  });
});
