export interface ApiResponse {
  message: string;
  next: string;
  previous: null | string;
  total_pages: Number;
  total_records: Number;
  results?: any[];
  result?: {
    properties?: any[]
  };
}

export interface Planets {
  uid: Number;
  name: string;
  url: string;
}
