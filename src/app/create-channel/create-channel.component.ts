import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.scss'],
})
export class CreateChannelComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private ChatService: ChatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
    });
  }

  onSubmit(form: any) {
    this.ChatService.createChannel(form.name);

    this.router.navigate(['chat']);

  }
}
