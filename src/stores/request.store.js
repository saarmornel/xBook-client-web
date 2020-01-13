import { decorate, observable, reaction,action } from "mobx";
import { addRequest, getIncoming, getOutgoing } from '../services/request.service'
import authStore from "./auth.store";

class RequestStore {
    incoming = [];
    outgoing = [];


    addRequest(book, receiving) {
            addRequest(book, receiving)
            .then(action((n)=>this.outgoing.push(n)))
    }

    pullIncoming() {
        getIncoming()
        .then(action((n)=>this.incoming.push(n)))
    }

    pullOutgoing() {
        getOutgoing()
        .then(action((n)=>this.outgoing.push(n)))
    }
}
decorate(RequestStore, {
    incoming: observable,
    outgoing: observable,
    addRequest: action
})

const requestStore = new RequestStore();
export default requestStore;

reaction(() => authStore.token, () => {
    requestStore.pullIncoming();
    requestStore.pullOutgoing();
},
    {
        onError(e) {
            console.error('error load requests')
        }
    }
);