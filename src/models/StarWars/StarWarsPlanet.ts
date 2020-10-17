export interface StarWarsPlanetData {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
}

export class StarWarsPlanet {
  readonly name: string;
  readonly rotationPeriod: number;
  readonly orbitalPeriod: number;
  readonly diameter: number;
  readonly climate: string;
  readonly gravity: string;
  readonly terrain: string;
  readonly surfaceWater: number;
  readonly population: number;
  readonly url: string;

  constructor({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    url,
  }: StarWarsPlanetData) {
    this.name = name;
    this.rotationPeriod = +rotation_period;
    this.orbitalPeriod = +orbital_period;
    this.diameter = +diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surfaceWater = +surface_water;
    this.population = +population;
    this.url = url;
  }
}

export default StarWarsPlanet;
