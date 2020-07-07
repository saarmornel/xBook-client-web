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
                // const index = this.bookStore.books.findIndex(b=>
                //     b.user.id===receiving && b.id===book
                // );
                // this.bookStore.books.splice(index,1);
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

    get unread() {
        return this.unreadIncoming+this.unreadOutgoing;
    }

    get unreadIncoming() {
        const reducer = (count, request) => +!request.read+count;
        return this.incoming.reduce(reducer,0);
    }

    get unreadOutgoing() {
        const reducer = (count, request) => +!request.read+count;
        return this.outgoing.reduce(reducer,0);
    }
}
decorate(RequestStore, {
    incoming: observable,
    outgoing: observable,
    addRequest: action,
    updateReuestStatus: action,
    unread: computed,
    unreadOutgoing: computed,
    unreadIncoming: computed,
})

const requestStore = new RequestStore(bookStore);
export default requestStore;

