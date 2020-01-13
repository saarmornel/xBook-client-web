import { decorate, observable } from "mobx";
import { addRequest, getIncoming, getOutgoing } from '../services/request.service'

class RequestStore {
    incoming = [];
    outgoing = [];


    addRequest(book, receiving) {
            addRequest(book, receiving)
            .then(action((this.outgoing.push))
    }

    pullIncoming() {
        getIncoming()
        .then(action(this.incoming.push))
    }

    pullOutgoing() {
        getOutgoing()
        .then(action(this.outgoing.push))
    }
}
decorate(RequestStore, {
    reuqesting: observable,
    outgoing: observable,
})