import { decorate, observable, reaction,action, computed } from "mobx";
import { addRequest, getIncoming, getOutgoing } from '../services/request.service'
import { updateRequestStatus } from "../services/request.service";
import { REQUEST_STATUS } from "../services/Request.Status";
import bookStore from "./book.store";

class RequestStore {
    incoming = [];
    outgoing = [];
    bookStore;

    constructor(bookStore) {
        this.bookStore = bookStore;
    }

    addRequest(book, receiving) {
            addRequest(book, receiving)
            .then(action(()=>{
                const index = this.bookStore.books.findIndex(book=>book.user.id===receiving);
                this.bookStore.books.splice(index,1);
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
            if(status === REQUEST_STATUS.accepted) {
                // this.bookStore.pullBooks();
                // todo
            } 
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

const requestStore = new RequestStore(bookStore);
export default requestStore;

