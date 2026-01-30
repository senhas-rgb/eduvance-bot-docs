'use client';

import { Navbar } from 'nextra-theme-docs';
import { Group, Text } from '@mantine/core';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { Logo } from '../Logo/Logo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={
          <Group align="center" gap={4}>
            <Logo />
            <Text size="lg" fw={800} c="blue" visibleFrom="xl">
              Eduvance Bot Documentation
            </Text>
          </Group>
        }
        // Eduvance discord
        chatLink="https://discord.gg/YM3cdKuAKa"
        projectLink="https://github.com/senhas-rgb/eduvance-bot-docs"
      >
        <>
          <ColorSchemeControl />
        </>
      </Navbar>
    </>
  );
};
