import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../service/storage.service';
import {Router} from '@angular/router';
import {ResponseService} from '../../service/response.service';
import {Response} from '../../model/response';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-response',
  templateUrl: './user-response.component.html',
  styleUrls: ['./user-response.component.css']
})
export class UserResponseComponent implements OnInit {
  constructor(
    public responseService: ResponseService,
    private titleService: Title,
    private storageService: StorageService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Отклики');
    this.newResponse();
  }

  deleteResponse(id: bigint): void{
    this.responseService.deleteById(id).subscribe();
  }

  readResponse(id: bigint): void{
    this.responseService.read(id).subscribe();
  }

  allResponse(): void{
    this.responseService.getByUsername(this.storageService.getUser().username);
  }
  newResponse(): void{
    this.responseService.getForUsernameNew(this.storageService.getUser().username);
  }

}
