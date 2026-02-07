import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitContactParams {
  name: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, message }: SubmitContactParams) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.submitContact(name, message);
    },
    onSuccess: () => {
      // Invalidate any queries that might depend on submissions
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}
