import { Item } from './item';
import { Link2 } from './link2';
import { Metadata } from './metadata';

export interface Collection {
    items: Item[];
    version: string;
    links: Link2[];
    href: string;
    metadata: Metadata;
  }