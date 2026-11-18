/**
 * In-memory rate limiter for API routes
 * In production, consider using Redis or similar for distributed rate limiting
 */

interface RateLimitEntry {
  timestamps: number[];
}

export class RateLimiter {
  private store: Map<string, RateLimitEntry>;
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number, maxRequests: number) {
    this.store = new Map();
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  /**
   * Check if a request from the given identifier should be rate limited
   * @param identifier - Usually IP address or user ID
   * @returns true if request is allowed, false if rate limited
   */
  check(identifier: string): boolean {
    const now = Date.now();
    const entry = this.store.get(identifier) || { timestamps: [] };

    // Filter out timestamps outside the current window
    entry.timestamps = entry.timestamps.filter(
      timestamp => now - timestamp < this.windowMs
    );

    // Check if limit exceeded
    if (entry.timestamps.length >= this.maxRequests) {
      return false;
    }

    // Add current timestamp
    entry.timestamps.push(now);
    this.store.set(identifier, entry);

    // Cleanup: Remove old entries periodically
    this.cleanup();

    return true;
  }

  /**
   * Get remaining requests for an identifier
   */
  getRemaining(identifier: string): number {
    const now = Date.now();
    const entry = this.store.get(identifier);

    if (!entry) {
      return this.maxRequests;
    }

    const recentRequests = entry.timestamps.filter(
      timestamp => now - timestamp < this.windowMs
    );

    return Math.max(0, this.maxRequests - recentRequests.length);
  }

  /**
   * Reset rate limit for an identifier
   */
  reset(identifier: string): void {
    this.store.delete(identifier);
  }

  /**
   * Cleanup old entries to prevent memory leaks
   */
  private cleanup(): void {
    if (this.store.size > 10000) {
      const now = Date.now();
      const keysToDelete: string[] = [];

      this.store.forEach((entry, key) => {
        const recentTimestamps = entry.timestamps.filter(
          timestamp => now - timestamp < this.windowMs
        );

        if (recentTimestamps.length === 0) {
          keysToDelete.push(key);
        }
      });

      keysToDelete.forEach(key => this.store.delete(key));
    }
  }

  /**
   * Get current store size (for monitoring)
   */
  size(): number {
    return this.store.size;
  }
}

// Default rate limiter instance for contact form
// 3 requests per minute per IP
export const contactRateLimiter = new RateLimiter(60 * 1000, 3);
