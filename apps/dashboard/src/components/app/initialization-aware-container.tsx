import { memo, ReactNode, useMemo } from 'react';

export enum InitializationStage {
  Initial,
  Empty,
  Loading,
  Failed,
  Finished,
}

type StageElement = ReactNode | (() => ReactNode);

interface Props {
  stage?: InitializationStage;
  initial?: ReactNode | (() => ReactNode);
  loading?: ReactNode | (() => ReactNode);
  failed?: ReactNode | (() => ReactNode);
  empty?: ReactNode | (() => ReactNode);
  finished?: ReactNode | (() => ReactNode);
}

export const useInitializationStage = <T, R>(
  data?: T,
  error?: R,
  isLoading?: boolean,
) => {
  const stage = useMemo(() => {
    if (isLoading && !(Array.isArray(data) && data.length > 0)) {
      return InitializationStage.Loading;
    }

    if (error) {
      return InitializationStage.Failed;
    }

    if (Array.isArray(data) && data.length === 0) {
      return InitializationStage.Empty;
    }

    if (data) {
      return InitializationStage.Finished;
    }

    return InitializationStage.Initial;
  }, [data, error, isLoading]);

  return stage;
};

export const InitializationAwareContainer = memo(
  ({
    stage = InitializationStage.Initial,
    initial = <></>,
    loading = <></>,
    failed = <></>,
    empty = <></>,
    finished = <></>,
  }: Props) => {
    const renderStage = (Stage: StageElement) => {
      return typeof Stage === 'function' ? <Stage /> : Stage;
    };

    switch (stage) {
      case InitializationStage.Loading:
        return renderStage(loading);
      case InitializationStage.Failed:
        return renderStage(failed);
      case InitializationStage.Empty:
        return renderStage(empty);
      case InitializationStage.Finished:
        return renderStage(finished);
      default:
        return renderStage(initial);
    }
  },
);
