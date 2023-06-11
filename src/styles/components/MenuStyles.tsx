import { menuAnatomy as parts } from '@chakra-ui/anatomy';

export const MenuStyles = {
  parts: parts.keys,
  baseStyle: {
    button: {
      _hover: {
        WebkitTapHighlightColor: 'transparent',
      },
    },
    list: {
      border: '0px',
      borderRadius: '5px',
      bg: 'brand.dark',
    },
    item: {
      p: 2,
      fontSize: 'sm',
      color: 'white',
      _focus: {
        bg: 'transparent',
      },
      _hover: {
        bg: 'brand.orange',
        WebkitTapHighlightColor: 'transparent',
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
