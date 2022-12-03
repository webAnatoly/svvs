import {
    Query,
    Resolver,
} from '@nestjs/graphql';

@Resolver('app')
export class AppResolver {

    @Query('test')
    public async getData(): Promise<string> {
        return `It's a graphQl response`;
    }
}
