import { Injectable } from '@angular/core';
import { IFilter } from '../interfaces/ifilter';

@Injectable({
  providedIn: 'root'
})
export class FilteredDataService  {

  data: Array<IFilter>;

  constructor() {
    this.data = [];
    // this.data.push({element: 'Sony'});
    // this.data.push({element: 'Panasonic'});
    // this.data.push({element: 'Sharp'});
    // this.data.push({element: 'Shivaki'});
    // this.data.push({element: 'Philips'});
    // this.data.push({element: 'Samsung'});
    // this.data.push({element: 'JVC'});
    // this.data.push({element: 'Electron'});
  }

  setData(data: string){
    const toDatabase: IFilter = {element: data};
    // const isExist:boolean = this.data.includes(toDatabase);
    if(this.data.filter(elementOfDatabase => elementOfDatabase.element === toDatabase.element).length === 0){
      this.data.push(toDatabase);
      if(this.data.length > 10){
        this.data.shift();
      }
    }
    console.dir(this.data);
  }

  getData(): Array<IFilter>{
    return this.data;
  }

  removeData(data: string): void{
    const fromDatabase: IFilter = {element: data};
    // if(this.data.filter(elementOfDatabase => elementOfDatabase.element === fromDatabase.element).length > 0){

    // }
    this.data = this.data.filter(elementOfDatabase => elementOfDatabase.element !== fromDatabase.element);
    console.dir(this.data);
  }
}
