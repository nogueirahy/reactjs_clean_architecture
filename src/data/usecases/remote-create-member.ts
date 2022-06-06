import { HttpClient, HttpStatusCode } from "../protocols/http";
import { CreateMember } from "../../domain/usecases";

export class RemoteCreateMember implements CreateMember {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteCreateMember.Model>
  ) {}

  async create(params: CreateMember.Params): Promise<CreateMember.Model> {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body;
      case HttpStatusCode.forbidden:
        throw new Error("Access Denied Error");
      default:
        throw new Error("Unexpected Error");
    }
  }
}

export namespace RemoteCreateMember {
  export type Model = CreateMember.Model;
}
