import { Model, Document } from 'mongoose';

export default class DataRepository<S extends Document> {
        private model: Model<S>;

        public constructor(model: S) {
                model = model;
        }

        public async create<D = {}>(data: D, callBack?: () => any): Promise<T> {}
}
