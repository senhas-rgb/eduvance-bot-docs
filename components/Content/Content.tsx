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
            href=""
            target="_blank"
          >
            Utility commands
          </Button>
          <Button
            size="xl"
            component="a"
            href=""
            target="_blank"
          >
            Moderation
          </Button>
          <Button
            size="xl"
            component="a"
            href=""
            target="_blank"
          >
            Educational resources
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
