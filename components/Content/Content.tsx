import { Marquee } from '@gfazioli/mantine-marquee';
import { Anchor, Image } from 'nextra/components';
import { Box, Button, Stack, Text } from '@mantine/core';

export const Content = () => {
  return (
    <>
      <Stack align="center" my={32}>
        <Marquee fadeEdges pauseOnHover>
          <Button
            size="xl"
            component="a"
            href="https://gfazioli.github.io/mantine-marquee/"
            target="_blank"
          >
            Mantine Marquee
          </Button>
          <Button
            size="xl"
            component="a"
            href="https://gfazioli.github.io/mantine-reflection/"
            target="_blank"
          >
            Mantine Reflection
          </Button>
          <Button
            size="xl"
            component="a"
            href="https://gfazioli.github.io/mantine-split-pane/"
            target="_blank"
          >
            Mantine Split Pane
          </Button>
          <Button
            size="xl"
            component="a"
            href="https://gfazioli.github.io/mantine-spinner/"
            target="_blank"
          >
            Mantine Spinner
          </Button>
          <Button
            size="xl"
            component="a"
            href="https://gfazioli.github.io/mantine-parallax/"
            target="_blank"
          >
            Mantine Parallax
          </Button>
        </Marquee>

        {/* <TextAnimate.Typewriter
          multiline
          value={[
            'Hello, World! Mantine Typewriter component',
            'That was a long time ago',
            'But it was fun',
          ]}
        /> */}
      </Stack>
    </>
  );
};
