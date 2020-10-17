export interface StarWarsAPIArrayResponseData<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
}

export class StarWarsAPIArrayResponse<T> {
  readonly count: number;
  readonly next: string;
  readonly previous: string;
  readonly results: Array<T>;

  constructor({
    count,
    next,
    previous,
    results,
  }: StarWarsAPIArrayResponseData<T>) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}

export default StarWarsAPIArrayResponse;
