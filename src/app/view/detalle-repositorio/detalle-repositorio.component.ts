import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AliadosComponent } from "../../components/aliados/aliados.component";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-detalle-repositorio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatTabsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatPaginatorModule,
    MatTableModule, MatSortModule, AliadosComponent],
  templateUrl: './detalle-repositorio.component.html',
  styleUrl: './detalle-repositorio.component.css'
})
export class DetalleRepositorioComponent {

  displayedColumns: string[] = ['Nombre del Documento', 'Accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    // Puedes cargar datos aquí desde un servicio también
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

const ELEMENT_DATA = [
  { nombre: 'DOCUMENTO XXXXXXXXXXXXXXXXXXXXXXX', ciudad: 'DESCARGAR' },
  { nombre: 'DOCUMENTO XXXXXXXXXXXXXXXXXXXXXXX',  ciudad: 'DESCARGAR' },
  { nombre: 'DOCUMENTO XXXXXXXXXXXXXXXXXXXXXXX',  ciudad: 'DESCARGAR' },
  { nombre: 'DOCUMENTO XXXXXXXXXXXXXXXXXXXXXXX', ciudad: 'DESCARGAR' },
  { nombre: 'DOCUMENTO XXXXXXXXXXXXXXXXXXXXXXX',  ciudad: 'DESCARGAR' },
  { nombre: 'DOCUMENTO XXXXXXXXXXXXXXXXXXXXXXX',  ciudad: 'DESCARGAR' },
  { nombre: 'DOCUMENTO XXXXXXXXXXXXXXXXXXXXXXX',  ciudad: 'DESCARGAR' },
];



