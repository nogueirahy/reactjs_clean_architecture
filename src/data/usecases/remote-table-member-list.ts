import { HttpClient, HttpStatusCode } from "../protocols/http";
import { LoadMemberList, LoadTableList } from "../../domain/usecases";

export class RemoteTableMemberList implements LoadMemberList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteTableMemberList.Model>
  ) {}

  async get(): Promise<RemoteTableMemberList.Model> {
    const httpResponse = await this.httpClient.get({ url: this.url });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.forbidden:
        throw new Error("Access Denied Error");
      default:
        throw new Error("Unexpected Error");
    }
  }
}

export namespace RemoteTableMemberList {
  export type Model = LoadTableList.Model;
}
