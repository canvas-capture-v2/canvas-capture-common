import type {
    Assignment,
    AssignmentGroup,
    SubmissionType,
    ScoreStatistic,
    DateStatistics,
    AssignmentDate,
    AssignmentOverride,
    AssignmentUser,
    DiscussionTopic,
    ExternalToolTagAttributes,
    FrozenAttribute,
    FileAttachment,
    GradingRules,
    GroupTopicChild,
    LockInfo,
    NeedsGradingCount,
    Rubric,
    RubricAssessment,
    RubricAssociation,
    RubricRating,
    RubricCriteria,
    Permissions
} from "./types/front-end/assignment";
import type {Course} from "./types/front-end/course";
import type {
    Quiz,
    QuizQuestion,
    QuizSubmission,
    QuizSubmissionQuestion,
    QuizQuestionType,
    BaseAnswer,
    MissingWordAnswer,
    MatchingAnswer,
    NumericalAnswer,
    ExactAnswer,
    PrecisionAnswer,
    RangeAnswer,
    MultipleBlankDropdownAnswer,
    Answer
} from "./types/front-end/quiz";
import type {Submission, SubmissionComment} from "./types/front-end/submission"
import type {CanvasAssignment, CanvasAssignmentGroup} from "./types/back-end/assignment"
import type {CanvasCourse} from "./types/back-end/course"
import type {CanvasSubmission} from "./types/back-end/submission";
import {divide_time_strings, add_time_strings, compare_time_strings} from "./utils/date_utils"

export type {
    Answer,
    Assignment,
    AssignmentGroup,
    AssignmentDate,
    AssignmentOverride,
    AssignmentUser,
    BaseAnswer,
    CanvasAssignment,
    CanvasAssignmentGroup,
    CanvasCourse,
    CanvasSubmission,
    Course,
    DateStatistics,
    DiscussionTopic,
    ExactAnswer,
    ExternalToolTagAttributes,
    FileAttachment,
    FrozenAttribute,
    GradingRules,
    GroupTopicChild,
    LockInfo,
    MatchingAnswer,
    MissingWordAnswer,
    MultipleBlankDropdownAnswer,
    NeedsGradingCount,
    NumericalAnswer,
    Permissions,
    PrecisionAnswer,
    Quiz,
    QuizQuestion,
    QuizQuestionType,
    QuizSubmission,
    QuizSubmissionQuestion,
    RangeAnswer,
    Rubric,
    RubricAssessment,
    RubricAssociation,
    RubricCriteria,
    RubricRating,
    ScoreStatistic,
    Submission,
    SubmissionComment,
    SubmissionType,
}

export {
    divide_time_strings,
    add_time_strings,
    compare_time_strings
}