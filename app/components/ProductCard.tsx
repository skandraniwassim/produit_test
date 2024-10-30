
import { Box, Image, Text, VStack } from '@chakra-ui/react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, rating, image }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <VStack p={4} align="start">
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
        <Text color="green.500" fontWeight="bold">${price.toFixed(2)}</Text>
        <Text>Rating: {rating}</Text>
      </VStack>
    </Box>
  );
};

export default ProductCard;