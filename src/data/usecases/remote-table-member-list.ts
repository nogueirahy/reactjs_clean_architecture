import { HttpClient, HttpStatusCode } from "../protocols/http";
import { LoadMemberList } from "../../domain/usecases";
import { tableMembeListModel } from "../models";

export class RemoteTableMemberList implements LoadMemberList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<tableMembeListModel.Response>
  ) {}

  async execute(): Promise<tableMembeListModel.Response> {
    const httpResponse = await this.httpClient.get({ url: this.url });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.forbidden:
        throw new Error("Access Denied Error"); //TODO create exceptions
      default:
        throw new Error("Unexpected Error"); //TODO create exceptions
    }
  }
}
