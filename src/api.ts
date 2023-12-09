export interface CoffeeData {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
}

export function getCoffee(): Promise<CoffeeData> {
  return fetch(
    "https://random-data-api.com/api/coffee/random_coffee"
  ).then(res => res.json())
}