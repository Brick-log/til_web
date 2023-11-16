import { useQuery } from '@tanstack/react-query';
import { getMyQuestion, getQuestionType } from '@/apis/question';

export const useMyQuestion = () => {
  return useQuery(['MY_QUESTION'], getMyQuestion);
};

export const useQuestionType = ({ questionType }: { questionType: string }) => {
  return useQuery(['MY_QUESTION_TYPE', questionType], () => getQuestionType({ questionType }), {
    enabled: questionType?.length > 0,
    keepPreviousData: true,
  });
};
