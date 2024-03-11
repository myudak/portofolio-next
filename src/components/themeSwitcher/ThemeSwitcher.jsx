import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useCallback } from "react";
import { flushSync } from "react-dom";
import React, { useState, useEffect } from "react";

function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

function useThemeTransition() {
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleTheme = useCallback(() => {
    const md = window.matchMedia("(max-width: 768px)").matches;

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      toggleColorMode();
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        toggleColorMode();
      });
    });

    transition.ready.then(() => {
      const blur = md ? 2 : 10;
      const duration = md ? 500 : 700;

      document.documentElement.animate(
        {
          clipPath: [`circle(50% at -100% 50%)`, `circle(100% at 50% 50%)`],
          filter: [`blur(${blur}px)`, `blur(0)`],
        },
        {
          duration,
          easing: "ease-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [toggleColorMode]);

  return {
    colorMode,
    toggleTheme,
  };
}

export function ThemeSwitcherButton() {
  const { toggleTheme, colorMode } = useThemeTransition();
  const mounted = useIsMounted();

  if (!mounted) return null;
  return (
    <Button
      boxShadow="lg"
      className="rounded-xl bg-neutral-200 p-4 dark:bg-neutral-800"
      type="button"
      onClick={toggleTheme}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default ThemeSwitcherButton;
