export interface LearnLink {
  title: string;
  url: string;
}

export interface ExampleApp {
  name: string;
  embedCode: string;
}

export interface Level {
  name: 'Spark' | 'Grow' | 'Master';
  title: string;
  brief: string;
  steps: string[];
}

export interface GardenSpec {
  plant: string;
  color: string;
}

export interface LabSpec {
  symbol: string;
  atomicHint: string;
  color: string;
}

export interface PlaygroundSpec {
  structure: string;
  color: string;
}

export interface Feature {
  id: string;
  name: string;
  tagline: string;
  blurb: string;
  icon: string;
  garden: GardenSpec;
  lab: LabSpec;
  playground: PlaygroundSpec;
  levels: [Level, Level, Level];
  exampleApps: ExampleApp[];
  learn: LearnLink[];
}
