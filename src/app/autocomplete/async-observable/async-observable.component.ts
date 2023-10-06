import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilteredDataService } from '../services/filtered-data.service';
import { IFilter } from '../interfaces/ifilter';

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.css']
})
export class AsyncObservableComponent implements OnInit {
  searchForm!: FormGroup;
  visibleRemove: boolean = false;
  visibleFilter: boolean = false;
  notFilteredData: Array<IFilter>;
  filteredData: Array<IFilter>;

  constructor(private formBuilder: FormBuilder, private readonly filterService: FilteredDataService){
    this.filteredData = [];
    this.notFilteredData = [];
  }

  ngOnInit(): void {
    this.buildSearchForm();
  }

  fromFilter(gotSearchFromFilter: string){
    // console.log(gotSearchFromFilter);
    const truncatedString: string = gotSearchFromFilter.substring(0, gotSearchFromFilter.indexOf('\n'));
    this.searchForm.get('search')?.setValue(truncatedString);
  }

  buildSearchForm() {
    this.searchForm = this.formBuilder.group(
      {
        search: this.formBuilder.control('')
      }
    );

    this.notFilteredData = this.filterService.getData();

    // this.searchForm.valueChanges
    // this.searchForm.get('search')?.touched;

    this.searchForm.get('search')?.valueChanges
      .subscribe(searchValue => {
        // console.log(searchValue);
        // let regex = new RegExp('/s/gi') ;
        // let regex = /s/gi;
        let regex = new RegExp(searchValue, "gi");
        this.filteredData = this.notFilteredData.filter(
          (base) => { return base.element.search(regex) != -1 }
          );
        if(searchValue){
          this.visibleRemove = true;
          this.visibleFilter = true;
        } else {
          this.visibleRemove = false;
          this.visibleFilter = false;
        }

      });
  }

  onRemove(){
    this.searchForm.get('search')?.setValue('');
    // this.visibleFilter = false;
  }

  onSubmit(){
    console.log(this.searchForm);
    this.filterService.setData(this.searchForm.value.search);
  }

  onMouseEnter(){
    // console.log('enter');
    // this.filteredData = this.filterService.getData();
    this.visibleFilter = true;
  }

  onMouseLeave(){
    // console.log("leave");
    this.visibleFilter = false;
  }

  onDelete(event: any){
    event.stopPropagation();
    // console.log(event);
    this.filterService.removeData(event.target.id);
    this.filteredData = this.filteredData.filter(elementFromFilter => elementFromFilter.element !== event.target.id);
    this.notFilteredData = this.notFilteredData.filter(elementFromFilter => elementFromFilter.element !== event.target.id);

    // this.filteredData = this.filterService.removeData(event.target.id);
    // this.notFilteredData = this.filterService.removeData(event.target.id);
  }
}
