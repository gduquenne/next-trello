import React, { useContext } from 'react';

interface IConfig {
  contextName: string;
  providerName: string;
}

export const useContextWrapper = <T>(
  ReactContext: React.Context<T>,
  config: IConfig
) => {
  const context = useContext(ReactContext);
  const { contextName, providerName } = config;

  if (!context) {
    throw new Error(`use${contextName} must be used within a ${providerName}`);
  }

  return context;
};
