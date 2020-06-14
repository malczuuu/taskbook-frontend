export interface Page<T> {
  content: T[];
  number: number;
  size: number;
  number_of_elements: number;
  total_elements: number;
  total_pages: number;
}

export function emptyPage<T>(): Page<T> {
  return {
    content: [],
    number: 0,
    size: 0,
    number_of_elements: 0,
    total_elements: 0,
    total_pages: 1,
  };
}
