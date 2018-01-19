import { Component, OnInit } from '@angular/core';
import {LoadfileService} from '../../../servicios/loadfile.service';
import * as _ from 'lodash';
import {Archivo} from '../file.modal'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles : FileList;
  currentUpload : Archivo;

  constructor() { }

  ngOnInit() {
  }

}
