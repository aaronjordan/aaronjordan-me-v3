import { useEffect, useState } from "react";

interface UseAfterHydrateConfig {
  /**
   * An optional callback to execute once hydration has executed.
   *
   * This callback may fire before the boolean result of the hook is changed.
   */
  onHydrate: () => void;
}

export function useAfterHydrate(config?: UseAfterHydrateConfig): boolean {
  const [afterHydrate, setAfterHydrate] = useState(false);
  useEffect(() => {
    setAfterHydrate(true);

    if (typeof config?.onHydrate == "function") {
      config.onHydrate();
    }
  }, []);
  return afterHydrate;
}
