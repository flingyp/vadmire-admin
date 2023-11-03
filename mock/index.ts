export interface MockResponse<K = unknown> {
  statusCode: number;
  statusText: string;
  data: K;
}
