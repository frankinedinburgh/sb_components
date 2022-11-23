type Enumerate<N extends number, Acc extends number[] = []> =
  Acc["length"] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type T = Range<0, 100>;
interface IChart {
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

interface IPieChart {
  percentage: T;
  colour?: string;
  padding?: number;
  rounded?: boolean;
}
