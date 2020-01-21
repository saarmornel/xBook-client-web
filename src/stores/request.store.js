import { decorate, observable, reaction,action, computed } from "mobx";
import { addRequest, getIncoming, getOutgoing } from '../services/request.service'
import authStore from "./auth.store";
import userStore from "./user.store";
import { updateRequestStatus } from "../services/request.service";
import { REQUEST_STATUS } from "../services/Request.Status";

class RequestStore {
    incoming = [];
    outgoing = [];
    authStore;
    constructor(authStore,userStore) {
        this.authStore = authStore;
        this.userStore = userStore;
        reaction(() => this.authStore.token, () => {
            this.pullIncoming();
            this.pullOutgoing();
        },
            {
                onError(e) {
                    console.error('error load requests')
                }
            }
        );
    }

    addRequest(book, receiving) {
            addRequest(book, receiving)
            .then(action(()=>{
                let index = this.userStore.users.findIndex(user=>user.id===receiving);
                index = this.userStore.users[index].books.findIndex(b=>b.id===book);
                this.userStore.users[index].books.splice(index,1);
                this.pullOutgoing();
            }))
    }

    pullIncoming() {
        getIncoming()
        .then(action((incoming)=>{this.incoming=incoming}))
    }

    pullOutgoing() {
        getOutgoing()
        .then(action((outgoing)=>{this.outgoing=outgoing}))
    }

    get incomingBooks() {
        let books = [];
        const requests = this.incoming.slice();
        requests.length && 
        requests.map(request => 
            {  
                request&&
                request.book&&
                books.push({
                    ...request.book,
                    read: request.receiving,
                    id: request.id,
                    updatedAt: request.updatedAt,
                    status: request.status,
                    userName: request.requesting.fullName, 
                    userThumbnail: request.requesting.picture, 
                    userId: request.requesting.id,
                    userPhone: request.requesting.phone,
                    userMail: request.requesting.mail,
                    isIncoming: true,
                })

            }
        );

        return books;
    }

    get outgoingBooks() {
        let books = [];
        const requests = this.outgoing.slice();
        requests.length && 
        requests.map(request => 
            {
                request&&
                request.book&&
                books.push({
                    ...request.book,
                    read: request.requesting,
                    id: request.id,
                    updatedAt: request.updatedAt,
                    status: request.status,
                    userName: request.receiving.fullName, 
                    userThumbnail: request.receiving.picture, 
                    userId: request.receiving.id,
                    userPhone: request.requesting.phone,
                    userMail: request.requesting.mail,
                    isIncoming: false
                })

            }
        );

        return books;
    }

    updateRequestStatus(request, status,isIncoming) {
        updateRequestStatus(request, status)
        .then(action(()=>{
            isIncoming ? this.pullIncoming() : this.pullOutgoing();
            status === REQUEST_STATUS.accepted && this.userStore.pullCurrentUser();
        }))
    }
}
decorate(RequestStore, {
    incoming: observable,
    outgoing: observable,
    addRequest: action,
    incomingBooks: computed,
    outgoingBooks: computed,
    updateReuestStatus: action
})

const requestStore = new RequestStore(authStore,userStore);
export default requestStore;

