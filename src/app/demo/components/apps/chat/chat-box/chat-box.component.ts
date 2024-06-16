import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/demo/api/user';
import { ChatService } from '../service/chat.service';

@Component({
    selector: 'app-chat-box',
    templateUrl: './chat-box.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatBoxComponent implements OnInit {

    defaultUserId: number = 123;

    textContent: string = '';

    uploadedFiles: any[] = [];

    emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛',
        '🤑', '😎', '🤓', '🧐', '🤠', '🥳', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔',
        '😟', '😠', '😡', '🤬', '😔', '😕', '🙁', '😬', '🥺', '😣', '😖', '😫', '😩', '🥱', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '🤤'
    ];

    @Input() user!: User;

    constructor(private chatService: ChatService) { }

    setMessage() {
        if (this.user) {
        }
    }

    ngOnInit(): void {
        this.setMessage();
    }

    sendMessage() {
        if (this.textContent == '' || this.textContent === ' ') {
            return;
        }
        else {
            let message = {
                text: this.textContent,
                ownerId: 123,
                createdAt: new Date().getTime(),
            }

            this.textContent = '';
        }
    }

    onEmojiSelect(emoji: string) {
        this.textContent += emoji;
    }

    parseDate(timestamp: number) {
        return new Date(timestamp).toTimeString().split(':').slice(0, 2).join(':');
    }
}
