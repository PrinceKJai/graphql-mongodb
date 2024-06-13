import { Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver((_of) => LessonType)
export class LessonResolver {
  @Query((_returns) => LessonType)
  lesson() {
    return {
        id: 'khdeq22',
        name: 'Neest Js class',
        startDate: (new Date()).toISOString(),
        endDate: (new Date()).toISOString()
    };
  }
}
