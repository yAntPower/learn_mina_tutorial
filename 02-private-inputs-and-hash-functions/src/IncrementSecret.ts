import {Field,SmartContract,state,State,method,Poseidon} from 'o1js';



export class IncrementSecret extends SmartContract {
    @state(Field) x = State<Field>();
    @method async initState(salt: Field,firstSecret: Field) {
        this.x.set(Poseidon.hash([salt, firstSecret]));
    }
}
