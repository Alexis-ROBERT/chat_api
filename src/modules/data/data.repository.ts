import { Model, Document, Query, FilterQuery, QueryWithHelpers, IfAny, Require_id } from 'mongoose';
import { DeleteResult, UpdateResult } from 'typeorm/driver/mongodb/typings';
import { IDataRepository } from './data.type';

export default class DataRepository<S extends Document> implements IDataRepository<S> {
        public constructor(public model: Model<S>) {}

        public async create<D = {}>(data: D): Promise<S> {
                const entity: S = new this.model(data);
                return await entity.save();
        }

        public async find<D = {}>(data: FilterQuery<D | S>): Promise<IfAny<S, any, Document<unknown, {}, S> & Require_id<S>>[]> {
                return await this.model.find(data);
        }

        public async update<D = {}>(data: FilterQuery<D | S>): Promise<UpdateResult> {
                return await this.model.updateOne(data);
        }

        public async updateMultiple<D = {}>(data: D): Promise<UpdateResult> {
                return await this.model.updateMany(data);
        }

        public async delete<D = {}>(data: D): Promise<DeleteResult> {
                return await this.model.deleteOne(data);
        }

        public async deleteMultiple<D = {}>(data: D): Promise<DeleteResult> {
                return await this.model.deleteMany(data);
        }
}
