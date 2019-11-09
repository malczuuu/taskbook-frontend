export interface Page<T> {
  content: T[];
  total_elements: number;
}

export function emptyPage<T>(): Page<T> {
  return { content: [], total_elements: 0 };
}
