import {Entity} from '../../common/base/entity.base';

type <%= classify(name) %>Data = {
   name: string;
};

export class <%= classify(name) %> extends Entity<<%= classify(name) %>Data> implements <%= classify(name) %>Data {
    get name() {
        return this.attr.name;
    }

    set name(value) {
        this.set('name', value);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static create(data: any) {
        return new <%= classify(name) %>(data);
    }
}
