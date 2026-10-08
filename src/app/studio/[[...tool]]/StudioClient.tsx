"use client";

import { useEffect, useState } from "react";
import { Studio } from "sanity";
import { dataset, projectId } from "../../../../sanity/env";
import config from "../../../../sanity.config";

export function StudioClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Studio
      config={{ ...config, projectId, dataset }}
      unstable_globalStyles
    />
  );
}
