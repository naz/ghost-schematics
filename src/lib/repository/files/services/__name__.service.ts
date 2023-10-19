import { I<%= classify(name) %> } from '../{something-somenthing-dynamic-here}-repository.interface';

export class <%= classify(name) %>Service{
    constructor(private readonly <%= lowercased(name) %>Repository: I<%= classify(name) %>Repository) {}
}
