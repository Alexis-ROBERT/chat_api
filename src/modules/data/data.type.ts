import { DeleteResult, UpdateResult } from 'typeorm/driver/mongodb/typings';

export interface IDataRepository<S> {
        create: (data) => Promise<S>;

        update: <D = {}>(data: D) => Promise<UpdateResult>;

        updateMultiple: <D = {}>(data: D) => Promise<UpdateResult>;

        delete: <D = {}>(data: D) => Promise<DeleteResult>;

        deleteMultiple: <D = {}>(data: D) => Promise<DeleteResult>;
}
