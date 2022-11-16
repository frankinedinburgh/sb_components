interface IChart {
  title?: string;
  subHeader?: string;
  stats: IStat[];
}

interface IBarGroup {
  barHeight: number;
  item: { name: string; value: number };
  barColour?: string;
  barPadding?: number;
}

interface IStat {
  name: string;
  value: number;
}
