import { SelectMixedOption } from 'naive-ui/es/select/src/interface';

export interface RecordSearchItem {
  label: string;
  key: string;
  type: 'input' | 'select' | 'date';
  placeholder: string;
  value: any;
  options?: SelectMixedOption[];
  [key: string]: any;
}
