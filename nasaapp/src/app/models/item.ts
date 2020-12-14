import { Datum } from './datum';
import { Link } from './link';

export interface Item {
    links: Link[];
    href: string;
    data: Datum[];
  }
  