import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments';
import { Category } from './category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAll():Observable<Category[]> {
    return this.http.get <Category[]>(enviroment.api + 'categories');
  }

    public save(category: Category): Observable<Category> {
        if (category.id) return this.http.put<Category>(enviroment.api + 'categories/' + category.id, category);
        return this.http.post<Category>(enviroment.api + 'categories', category);
    }

    public delete(id:number){
         return this.http.delete(enviroment.api + 'categories/' + id);
    }

}
