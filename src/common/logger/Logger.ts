/**
 * Browser logger that prefixes messages with a context name.
 * Use for development/debugging; can be replaced with a proper logging service later.
 */
export class BrowserLogger {
  constructor(private readonly context: string) {}

  info(message: string, data?: unknown): void {
    if (data !== undefined) {
      console.info(`[${this.context}] ${message}`, data);
    } else {
      console.info(`[${this.context}] ${message}`);
    }
  }

  error(message: string, error?: unknown): void {
    if (error !== undefined) {
      console.error(`[${this.context}] ${message}`, error);
    } else {
      console.error(`[${this.context}] ${message}`);
    }
  }
}
