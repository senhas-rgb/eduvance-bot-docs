'use client';

import { TextAnimate } from '@gfazioli/mantine-text-animate';
import { IconBrandDiscordFilled, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Button, Center, Code, Paper, Text, Title } from '@mantine/core';
import pack from '../../package.json';
import { ProductHunt } from '../ProductHunt/ProductHunt';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Center my={64}>
        <ProductHunt />
      </Center>
      <Title maw="90vw" mx="auto" className={classes.title} ta="center">
        <span style={{ fontSize: '110px' }}>Eduvance</span>
        <span style={{ fontSize: '60px' }}> <TextAnimate
          animate="in"
          by="character"
          inherit
          variant="gradient"
          component="span"
          segmentDelay={0.04}
          duration={0.5}
          animation="scale"
          animateProps={{
            scaleAmount: 1,
          }}
          gradient={{ from: 'white', to: 'blue' }}
        >
         Bot Documentation
        </TextAnimate></span>
      </Title>

      <Text c="dimmed" ta="center" size="xl" maw={580} mx="auto" mt="sm">
        This is the official documentation for Eduvance Discord bot
      </Text>

      <Center>
        <Button
          href="https://discord.com/oauth2/authorize?client_id=1205836829656358982"
          component="a"
          rightSection={<IconExternalLink />}
          leftSection={<IconBrandDiscordFilled size={22} />}
          variant="outline"
          px={32}
          radius={256}
          size="lg"
          mx="auto"
          mt="xl"
        >
          Open bot in Discord
        </Button>
      </Center>
    </>
  );
}
