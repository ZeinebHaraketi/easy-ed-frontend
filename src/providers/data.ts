import {
  DataProvider,
  BaseRecord,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";
import { MOCK_SUBJECTS } from "./mock-subjects";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    // Implement your logic to fetch a list of resources

    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },

  getOne: async <TData extends BaseRecord = BaseRecord>(
    params: any
  ): Promise<{ data: TData }> => {
    // Implement your logic to fetch a single resource
    throw new Error("Not implemented");
  },

  create: async <TData extends BaseRecord = BaseRecord>(
    params: any
  ): Promise<{ data: TData }> => {
    // Implement your logic to create a resource
    throw new Error("Not implemented");
  },

  update: async <TData extends BaseRecord = BaseRecord>(
    params: any
  ): Promise<{ data: TData }> => {
    // Implement your logic to update a resource
    throw new Error("Not implemented");
  },

  deleteOne: async <TData extends BaseRecord = BaseRecord>(
    params: any
  ): Promise<{ data: TData }> => {
    // Implement your logic to delete a resource
    throw new Error("Not implemented");
  },

  getApiUrl: (path?: string) => {
    // Return base API URL or combine with path
    return path ?? "";
  },
};
