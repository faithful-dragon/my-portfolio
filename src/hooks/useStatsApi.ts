import { useCallback, useEffect, useState } from 'react';

export interface StatsSnapshot {
  leetcode?: unknown;
  gfg?: unknown;
}

export function useStatsApi() {
  const [stats, setStats] = useState<StatsSnapshot>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/stats');

      if (!response.ok) {
        throw new Error(`Failed to fetch stats: ${response.status}`);
      }

      const data = (await response.json()) as StatsSnapshot;
      setStats(data);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
}
