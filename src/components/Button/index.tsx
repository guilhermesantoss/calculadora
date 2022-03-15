import { ButtonStyled } from './styles';

type ButtonProps = {
  label: string;
  click: (label: string) => void;
  operation?: boolean;
  double?: boolean;
  triple?: boolean;
};

export function Button(props: ButtonProps) {
  let classes = 'button ';
  classes += props.operation ? 'operation' : '';
  classes += props.double ? 'double' : '';
  classes += props.triple ? 'triple' : '';

  return (
    <ButtonStyled
      onClick={() => props.click && props.click(props.label)}
      className={classes}
    >
      {props.label}
    </ButtonStyled>
  );
}
