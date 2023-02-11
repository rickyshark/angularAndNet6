import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AlertaConfirmComponent } from '../alerta-confirm/alerta-confirm.component';
import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import { Category } from './category.dto';
import { CategoryService } from './category.service';
import { Category2 } from './category2.dto';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [`
    .full-width-table {
      width: 100%;
    }
    
  `]
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;
  dataSource!: MatTableDataSource<Category>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name', 'description','action'];

  showForm: Boolean = false;
  category!: Category;
  showLoading: Boolean = false;
  showLoadingForm = false;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.RefreshData();
  }

  ngAfterViewInit(): void {
    this.showLoading = true;
    this.categoryService.getAll().subscribe(categories => {
        this.dataSource = new MatTableDataSource(categories);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    this.showLoading = false;
    })
  }
      MostrarForm() {
          this.showForm = !this.showForm;
      }

   RefreshData() {
        this.categoryService.getAll().subscribe(categories => {
            this.dataSource = new MatTableDataSource(categories);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          this.table.dataSource = this.dataSource;
        })
          this.showLoading = false;
    }

    MostrarTabla() {
        this.showForm = false;
        this.RefreshData();
    }

    onSave(category: Category) {
      console.log("We save one category", category)
      this.showLoading = true;
      this.showLoadingForm = true;

        this.categoryService.save(category).subscribe((categorySaved) => {
            console.log('saved', categorySaved);
            this.showForm = false;
            this.RefreshData();
        })
    }

    onEditCategory(category: Category) {
        console.log('editing category', category);
        this.category = category;
        this.showForm = true;
    }

  //llamo el componente dialog Nota: puedo llamar cualquier otro componente y este se dibujara en un modal, esta es la principal funcion de mat-dlogog
  confirmarBorrado(id:number): any {
    let dialogRes = this.dialog.open(AlertaConfirmComponent, {
      width: '250px',
    });

    //funcion de dialog que me permite saber si fue serrado despues de seleccionar si, aagregadno en el boton yes [mat-dialog-close]=true
    dialogRes.afterClosed().subscribe(res => {
      console.log(res)
      if (res == true) this.onDeleteCategory(id);
    })


  }


  onDeleteCategory(id: number) {
    this.categoryService.delete(id).subscribe(()=>{
      this.RefreshData();
    });
    
  }

  onNewCategoryClick() {
    this.category = {
      id: 0,
      name: '',
      description: ''
      }
  }

}
