import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/demo/api/user';
import { ChatService } from '../service/chat.service';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html'
})
export class UserCardComponent implements OnInit {

    @Input() user!: User;

    constructor(private chatService: ChatService) { }

    ngOnInit(): void {
    }

    changeView(user: User) {
        this.chatService.changeActiveChat(user);
    }
}
