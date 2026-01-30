import { Footer } from 'nextra-theme-docs';
import { Anchor, Box } from '@mantine/core';

export const MantineFooter = () => (
  <Box style={{ position: 'relative' }}>
    <Footer>
      MIT {new Date().getFullYear()} © <Anchor href="https://www.eduvance.au/">Eduvance</Anchor>
    </Footer>
  </Box>
);
