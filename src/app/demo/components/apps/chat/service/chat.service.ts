import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/demo/api/user';

@Injectable()
export class ChatService {

    _activeUser: User = {
        "id": 1,
        "name": "Ioni Bowcher",
        "image": "ionibowcher.png",
        "status": "active",
        "lastSeen": "2d"
    }

    private activeUser = new BehaviorSubject<User>(this._activeUser);

    activeUser$ = this.activeUser.asObservable();

    constructor(private http: HttpClient) { }

    getChatData() {
        return this.http.get<any>('assets/demo/data/chat.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

    changeActiveChat(user: User) {
        this._activeUser = user;
        this.activeUser.next(user);
    }
}
