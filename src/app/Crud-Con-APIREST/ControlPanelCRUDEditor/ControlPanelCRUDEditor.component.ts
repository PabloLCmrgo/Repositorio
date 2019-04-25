import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-control-panel-crudeditor',
  templateUrl: './ControlPanelCRUDEditor.component.html',
  styleUrls: ['./ControlPanelCRUDEditor.component.css']
})
export class ControlPanelCRUDEditorComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
    
    this.router.params.subscribe(data => {
      alert(data['product_id']);
  });
  }

  ngOnInit() {
  }

}
