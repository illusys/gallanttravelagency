const submissions = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

export function isRateLimited(identifier) {
  const key = identifier || 'unknown';
  const now = Date.now();
  const entry = submissions.get(key) || { count: 0, resetAt: now + WINDOW_MS };

  if (now > entry.resetAt) {
    submissions.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_SUBMISSIONS) {
    return true;
  }

  entry.count += 1;
  submissions.set(key, entry);
  return false;
}
