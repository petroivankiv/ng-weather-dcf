import { Component, Input, OnChanges } from '@angular/core';

interface TableColumn {
  label: string;
  key: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnChanges {
  @Input() dataSource: T[] = [];
  @Input() columns: TableColumn[] = [];

  headerKeys: string[] = [];

  ngOnChanges() {
    this.headerKeys = this.columns.map(c => c.key);
  }
}
