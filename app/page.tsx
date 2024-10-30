'use client';
import { Box, Grid, Spinner, Text, Select } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ProductContext, ProductProvider } from './context/ProductContext';
import ProductCard from './components/ProductCard';
import { filterProducts } from './utils/filterProduct';
import { Product } from './components/Product';

const Home: React.FC = () => {
  const { products, loading, error } = useContext(ProductContext)!;
  const [minRating, setMinRating] = useState(0);

  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;

  
  const filteredProducts: Product[] = filterProducts(products, minRating);

  return (
    <Box>
      <Select
        value={minRating}
        onChange={e => setMinRating(Number(e.target.value))}
        placeholder="Filter by rating"
        mb={4} 
      >
        <option value={0}>All</option>
        <option value={1}>1+</option>
        <option value={2}>2+</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
        <option value={5}>5</option>
      </Select>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            image={product.images[0]} 
          />
        ))}
      </Grid>
    </Box>
  );
};

const App: React.FC = () => (
  <ProductProvider>
    <Home />
  </ProductProvider>
);

export default App;