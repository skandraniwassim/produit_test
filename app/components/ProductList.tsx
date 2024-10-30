'use client';
import { Box, Spinner, Text, Grid, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Heading } from "@chakra-ui/react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "./Product";
const ProductList = () => {
  const { products, loading, error, minRating, setMinRating } = ProductContext();

  if (loading) return <Spinner size="xl" color="teal.500" />;
  if (error) return <Text color="red.500">{error}</Text>;

  // Filtrer les produits en fonction de `minRating`
  const filteredProducts = products.filter((Product) => Product.rating >= minRating);

  return (
    <Box>
      <Heading size="md" mb={4}>Filtrer par Note</Heading>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={minRating}
        min={0}
        max={5}
        step={1}
        onChange={(value) => setMinRating(value)}
      >
        <SliderTrack bg="gray.100">
          <SliderFilledTrack bg="teal.500" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>

      <Text mt={2}>Note minimale : {minRating}</Text>

      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6} mt={6}>
        {filteredProducts.map(Product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Text fontWeight="bold">{product.name}</Text>
            <Text>Rating: {product.rating}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
