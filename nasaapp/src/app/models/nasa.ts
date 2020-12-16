import { Collection } from '../models/collection';

export interface RootObject {
    collection: Collection;
  }
  
  
  interface Link {
    render: string;
    href: string;
    rel: string;
  }