import React from 'react';
import { DisplayContainer } from './styles';

type DisplayProps = {
  value: string,
};

export function Display(props: DisplayProps) {
  return <DisplayContainer>{props.value}</DisplayContainer>;
}
